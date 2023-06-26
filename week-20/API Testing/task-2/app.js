const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  //It should receives a query parameter: message=somemessage
// And responds with a json object with a translated text like below:

  const { message } = req.query;

    if (req.query.message) {
        res.json({
            "received": `${message}`,
            "translated": "I am Groot!"
        })
        return;
    }
    res.status(400).json({
        "error": "I am Groot!"
    })
    return;
});

module.exports = app;