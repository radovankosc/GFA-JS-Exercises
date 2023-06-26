const express = require("express");
const { get } = require("http");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
//app.set('views', __dirname + '/views')

app.get("/", (req,res) => {
    const todos = ['get up', 'survive', 'go back to bed'];
    res.render("home", {
        todo : todos
    }); 
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });