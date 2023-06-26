const express = require("express");
const mysql = require ("mysql2");
const bodyParser = require("body-parser");
const { Router } = require("express");


const router = express.Router();


//middlewares:
// router.use(bodyParser.json());


//setting mysql2 connection:
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "gfa",
        database: "reddit"
    }
)

connection.connect(error => {
    if(error){
        throw error;
    }
    console.log("Successfully connected to database");
});

//endpoints:

//testing endpoint:hello
// router.get("/hello", (req,res) => {
//     res.status(200).send("hello word");
// });

router.get("/posts", (req, res) => {

    res.set("Content-Type", "application/json");

    connection.query(
        `SELECT * FROM posts LEFT JOIN users ON posts.user_id = users.id;`,
        (error, result) => {
            if (error) {
                res.status(500).send("Error occurs:" + error)
            }else{
                res.status(200).send(result)
                
            }
        }
    )
})

router.post("/posts", (req,res) => {
    res.set("Content-Type", "application/json");
    const title = req.body.title;
    const url = req.body.url;
    const user_id = req.body.user_id;
    
    if(title === undefined || url === undefined){
        res.status(400).send("You forgot to add required info: title or url! ")
    }    

    connection.query(
        `INSERT INTO posts (title, url, user_id) VALUES (?,?,?);`,
        [title, url, user_id],
        (error, result) => {
            if (error) {
                res.status(500).send(error);
              } else if (result.affectedRows === 0) {
                res.status(400).send(error);
              } else {
                res.status(201).send("Succesfully added to your database!");
              }
        }
    )
})

router.put("/posts/:id/:vote", (req,res) => { //in POSTMAN: /localhost:3000/api/posts/2/upvote
    res.set("Content-Type", "application/json");
    const id = req.params.id;
    const vote = req.params.vote;

    let votingOperator = "";

    if(vote === "upvote"){
        votingOperator = "+";
    }else if (vote === "downvote") {
        votingOperator = "-";
    }else{
        return res.status(404).send("Please, vote!");
    }

    connection.query(
        `UPDATE posts SET score = score ${votingOperator}1 WHERE id = ?;`,
        [id],
        (error, result) => {
            if (error) {
                res.status(500).send(error);
              } else if (result.affectedRows === 0) {
                res.status(400).send(error);
              } else {
                res.status(201).send("Succesfully voted, database modified!");
              }
        }
    )
})

router.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    res.set("Content-Type", "application/json");

    let deletedPost = connection.query(`SELECT * FROM posts WHERE id = ?;`, 
    [id], (err, res) => {
        if (err){
            res.send("Nothing has been deleted.")
        }else{
            return res;
        }
    }
    )

    connection.query(
        `DELETE FROM posts WHERE id = ?;`, 
        [id],
        (error, result) => {
            if (error) {
                res.status(500).send("Error occurs:" + error)
            }else if (result.affectedRows === 0) {
                res.status(400).send("Id not found, choose another id!")
            }            
            else{
                res.status(200).send(deletedPost._rows[0][0]);// _rows is property of query deletedPost, it is array of arrays             
            }
        }
    )
})

//POSTMAN says: cannot put :(, (is it possible to have 2x put endpoint in one file?)
router.put("/posts/:id", (req, res) => {
    const id = req.params.id
    const title = req.body.title;
    const url = req.body.url;
    res.set("Content-Type", "application/json");
    
    connection.query(
        `UPDATE posts SET title = ?, url = ?, timestamp = CURRENT_TIMESTAMP WHERE id = ?;`,
        [title, url, id],
        (error, result) => {
            if (error) {
                res.status(500).send(error);
              } else if (result.affectedRows === 0) {
                res.status(400).send(error);
              } else {
                res.status(200).send("Succesfully modified!");
              }
        }
    )
})

module.exports = router;