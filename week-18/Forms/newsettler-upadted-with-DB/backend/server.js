const express = require("express");
const path = require("path");
const PORT = 3000;
const mysql = require("mysql2");

let connection = mysql.createConnection({
  host: "localhost",
  user: "newsettler",
  database: "newsettler",
});
connection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Successfully connected to database");
});

const app = express();

app.use(express.static(__dirname + "/../frontend"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve("../frontend/index.html"));
});

app.post("/signup", (req, res) => {
  const data = req.body;

  const username = data.name;
  const email = data.email;

  //----DB query---------------------
  if (username === "" || email === "") {
    res.status(400).send("<h1>You did not add email or username or both!<h1>");
    return; // we must add return; to end if statement
  }
  const query = connection.query(
    `INSERT INTO posts (name, email) VALUES (?, ?);`,
    [username, email],
    (error, result) => {
      if (error) {
        res.status(500).send(error);
      }else if (result.affectedRows === 0) {
        res.status(400).send(error);
      }else{
        res.send(`<h1>Thanks ${username}, we will send updates to ${email}</h1>`);//res.send() can write only once!!
      }
    }
  );
  console.log(`>> Executed query was: ${query.sql}`);
});
//-----------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
