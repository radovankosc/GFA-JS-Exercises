const express = require("express");
const mysql = require ("mysql2");
const bodyParser = require("body-parser");
const { Router } = require("express");
const router = express.Router();

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
    connection.query(
        `SELECT * FROM posts`,
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
    const title = req.body.title;
    const url = req.body.url;
    const user_id = req.body.user_id;
    
    if(title === undefined || url === undefined){
        res.status(400).send("You forgot to add required info: title or url! ")//is 400 ok
    }    

    connection.query(
        `INSERT INTO posts (title, url, user_id) VALUES (?,?,?);`,
        [title, url, user_id],
        (error, result) => {
            if (error) {
                res.status(500).send(error);
              } else if (result.affectedRows === 0) {
                res.status(404).send(error);//404, because not found 
              } else {
                res.status(201).send("Succesfully added to your database!");
              }
        }
    )
})

//no put,better call it get, bcs we do not udating body, but getting some data 
router.put("/posts/:id/:vote", (req,res) => { //in POSTMAN: /localhost:3000/api/posts/2/upvote
    const id = req.params.id;
    const vote = req.params.vote;

    let votingOperator = ""; //must be let(const cannot be changed)

    if(vote === "upvote"){
        votingOperator = "+1";
    }else if (vote === "downvote") {
        votingOperator = "-1";
    }else{
        return res.status(400).send("Please, vote!");
    }

    connection.query(
        `UPDATE posts SET score = score + ? WHERE id = ?;`,
        [votingOperator,id],
        (error, result) => {
            if (error) {
                res.status(500).send(error);
              } else if (result.affectedRows === 0) {
                res.status(404).send(error);//not found
              } else {
                connection.query(`SELECT score FROM posts WHERE id = ? `, [id],
                (error, result) => {
                    if (error) {
                        throw error;          
                      } else {
                        for(let row of result){
                            res.status(201).send((row.score).toString())
                            break;                
                        }
                      }
                    }                         
                    )
              }
        }
    )
})

router.delete("/posts/:id", (req, res) => {
    const id = req.params.id;

    let deletedPost = connection.query(`SELECT * FROM posts WHERE id = ?;`, 
    [id], (err, result) => {
          if (err) {
            res.status(500).send(err);
          } else if (result.affectedRows === 0) {
            res.status(404).send(err);
          } else {
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
                res.status(404).send("Id not found, choose another id!")//changed 404!!!
            }            
            else{
                res.status(200).send(deletedPost._rows[0][0]);// _rows is property of query deletedPost, it is array of arrays             
            }
        }
    )
})

router.put("/posts/:id", (req, res) => {
    const id = req.params.id
    const title = req.body.title;
    const url = req.body.url;
    
    connection.query(
        `UPDATE posts SET title = ?, url = ?, timestamp = CURRENT_TIMESTAMP WHERE id = ?;`,
        [title, url, id],
        (error, result) => {
            if (error) {
                res.status(500).send(error);
              } else if (result.affectedRows === 0) {
                res.status(400).send(error); //also 404???
              } else {
                res.status(200).send("Succesfully modified!");
              }
        }
    )
})

module.exports = router;

