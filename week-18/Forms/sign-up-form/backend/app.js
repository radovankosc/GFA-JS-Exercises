const express = require("express");
const path = require("path");
const PORT = 3000;

const app = express();

app.use(express.static(__dirname + "/../frontend"));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve("../frontend/index.html"));
});

app.post("/post", (req, res) => {
  // res.send("<h1>neco</h1>");//
    console.log(req.body);
    res.status(202).send(req.body);//sending to res
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});