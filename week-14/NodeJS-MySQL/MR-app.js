//BUILDING REST API
//USING EXPRESS
//CONNECT DATABASE INTO THIS PROCES


const express = require("express");
const sql = require("mysql2");

const connection = sql.createConnection({
    host: 'localhost', //database running on a localhost
    user: 'gfa',
    database: 'reddit',
  }
);

connection.connect(error => {
  if (error) {
    throw error;
  }

  console.log("Succesfully connected to database");
});

const app = express()

app.use(express.json());//midleware for parsing the json body, convert body into JS object


//in the GET endpoint select everything from DB and sen it to user:
//-------------------------------------------------------------------------
// !!!!!!!!!!!!!!READ

app.get('/api/posts', (req, res) => {
  //run a query  in GET
  //it returns in JSON whole table as selected: SELECT * FROM posts;
  const query = connection.query(
    `SELECT * FROM posts;`,// when: LIMIT ?, ?;` --limit/specify selection, not send milion of rows in DB:D
    // [parseInt(req.query.offset), parseInt(req.query.size)], /
    (error, result) => {
      if (error) {
        res.status(500).send(error);//status method of the response object , after body of the response itself
      } else {
        res.status(200).send({
          message: "success",
          size: result.length,
          data: result
        });
      }
    }
  );

// to display executed query in terminal console
  console.log(`>> Executed query was: ${query.sql}`);
});
//---------------------------------------------------------------------------

// !!!!!!!!!!!!!!!CREATE

app.post('/api/posts', (req, res) => {

  const data = req.body;

  const query = connection.query(
    `INSERT INTO posts (title, body) VALUES (?, ?);`,
    [data.title, data.body],
    (error, result) => {
      if (error) {
        res.status(500).send(error);
      } else if (result.affectedRows === 0) {
        res.status(400).send(error);
      } else {
        res.status(201).send({//we are sending 201 if a new resource has been succesfully created, code for sucessfuly created
          id: result.insertId //should be send as a header, not as a body, it is not RESTful :D
        });
      }
    }
  );

  console.log(`>> Executed query was: ${query.sql}`);
});
//------------------------------------------------------------------------------

//DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//parametrized path, so we can access it from req object
app.delete('/api/posts/:id', (req, res) => {

//we have to parse id to be sure it is integer and check if id is number
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(404).send();
    return;
  }

  const query = connection.query(
    `DELETE FROM posts WHERE id = 2`,
    // [id],
    (error, result) => {
      if (error) {
        res.status(500).send(error);
      } else if (result.affectedRows === 0) {
        res.status(404).send();
      } else {
        res.status(204).send();//it it is successs
      }
    }
  );

  console.log(`>> Executed query was: ${query.sql}`);
});
//--------------------------------------------------------------------------------------
// PUT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

app.put('/api/posts/:id', (req, res) => {
  const data = req.body;

  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(404).send();
    return;
  }

  // if (data?.title === undefined) {
  //   res.status(400).send({
  //     message: "Title has to be specified"
  //   });
  //   return;
  // }

  const query = connection.query(
    `UPDATE posts SET title = 'updated', body = 'updated' WHERE id = 3;`,
    // [data.title || "", data.body, req.params.id],//title can be empty
    (error, result) => {
      if (error) {
        res.status(500).send(error);
      } else if (result.affectedRows === 0) {
        res.status(404).send(error);//code for could not be found(user wnats to update something)
      } else {
        res.status(204).send();//code for no content
      }
    }
  );

  console.log(`>> Executed query was: ${query.sql}`);
});

app.listen(8080);