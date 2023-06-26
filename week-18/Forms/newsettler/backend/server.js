const express = require("express");
const path = require("path");
const PORT = 3000;

const app = express();

app.use(express.static(__dirname + "/../frontend"));
app.use(express.urlencoded({extended: true}));//for parsing application/x-www-form-urlencoded
app.use(express.json());

app.get("/", (req,res) => {
    res.sendFile(path.resolve("../frontend/index.html"));
})

app.post("/signup", (req,res) => {
    const body = req.body;
    const username = req.body.name;  
    const email = req.body.email;
    console.log(body);
    console.log("This is username: " + username + "\n This is username: "+ email);
    res.send(`<h1>Thanks ${username}, we will send updates to ${email}</h1>`);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });