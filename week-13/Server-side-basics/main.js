const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//MIDLEWARE(feature from express)
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port);
