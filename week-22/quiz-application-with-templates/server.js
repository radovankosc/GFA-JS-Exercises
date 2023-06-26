const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const indexAPI = require("./app.js");

app.use("/api", indexAPI);//prefix endpointu
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.redirect("/api/game");
});

app.get("/game", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

app.get("/questions", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/manage-questions.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  });