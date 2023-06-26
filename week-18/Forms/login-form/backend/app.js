const express = require("express");
const path = require("path");
const PORT = 3000;

const app = express();

app.use(express.static(__dirname + "/../frontend"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  //able to run nodemon and BE beacuse we have endpoint :D
  res.sendFile(path.resolve("../frontend/index.html"));
});

app.get("/loggedIn", (req, res) => {
    console.log("You are logged in, dude !!!");
    res.sendFile(path.resolve("../frontend/logged.html"));
    
    //in this case res.sendFile(__dirname + "/../frontend/thanks.html") does not work
  });

app.post("/logged", (req, res) => {
  console.log(req.body); //parsed via middleware: app.use(express.urlencoded({extended: true}));
  res.redirect("/loggedIn"); //redirect frontend  after click on send button
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
