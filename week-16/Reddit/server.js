"use strict";
const express = require("express");
const app = express();
const PORT = 4000;
const indexAPI = require("./api-controlor.js");//because in api-controler.js is module.export = router (router contains multiple endopoints)

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use("/api", indexAPI);//prefix endpointu

//GET endpoints for STATIC files to onload them when run the app
app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.get("/new-post", (req,res) => {
  res.sendFile(__dirname + "/public/new-post.html");
})
//--------------------------------------------------------------

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
