"use strict";
//IMPORTS:
const express = require('express');
const path = require('path');//load the path module???instalation???
const bodyParser = require("body-parser");
const { query } = require('express');

const app = express();
const PORT = 8080;//better to store port to variable

app.use(express.static('assets'));//serving static assets to serve your assets foldeR

//when someone loads our websites, we want to send the file which is index.html
//__dirname = dir name of current file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));//render the static index.html instead of just returning a basic text
  //path.join-we need to have path package imported
});

//DOUBLING:
app.get("/doubling", (req, res) => {
  if(req.query.input !== undefined){
    res.json(
      {
        "received": parseInt(req.query.input),
        "result": parseInt(req.query.input)*2
      }
    )
  }
  else{
    res.json(
      {
        "error": "Please provide an input!"
      }
    )
  }
})

//GREATER:
app.get("/greeter",(req, res) =>{
  const name = req.query.name;
  const title = req.query.title;
  if(name === undefined && title === undefined)
  {
    res.status(400).send({ "error": "Please provide a name and a title!"})
  }
  else if(name === undefined){
    res.status(400).send({
      "error": "Please provide a name!"
    });
  }
  else if(title === undefined){
    res.status(400).send({
      "error": "Please provide a title!"
    });
  }
  else{
    res.json({
      "welcome_message": "Oh, hi there " + name + ", my dear " + title + "!"
    })
  }
})

//APPEND A
app.get("/appenda/:appendable", (req, res) => {
  const appendable = req.params.appendable;
  console.log(appendable)
  if(appendable === undefined){
    res.status(404)
  }
  else{
    res.json({
      "appended": appendable + "a"
    })
  }
})

//DO UNTIL
app.use(express.json())

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

function mySum(n){
  let sum = 0
  for(let i = 0; i< n;i++){
    sum += i
  }
  return sum;
}

app.post("/dountil/:operation", (req, res) => {
  if (req.params === undefined){
    res.json({ "error": "Please provide a number!" });
  }

  else if (req.params.operation === "sum"){
    res.json({ "result": parseInt(mySum(req.body.until)) });
    
  }
  else if (req.params.operation === "factor") {
    res.json({ "result": parseInt(factorial(req.body.until)) });
    
  }
  else{
    res.json({
      "result" : "nothing found"
    });
    console.log("not working? what is wrong with my if else loop?")
  }
});


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));






