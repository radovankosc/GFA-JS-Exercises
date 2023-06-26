"use strict";
const express = require("express");
const app = express();
const PORT = 3000;
const indexAPI = require("./index.js");

app.use(express.json());
app.use('/assets', express.static(__dirname + '/assets'));
app.use("/API", indexAPI);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
