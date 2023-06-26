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
    res.status(200);
    // res.write("<p>This is response<p>")
    console.log(req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});