const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
//app.set('views', __dirname + '/views')

app.get("/", (req,res) => { //
    const name = req.query.name ; // we use req.query.... what ever next (?parameters = value) is optional, so we do not need anything after "/"
    if(name === undefined){
        res.render("home", {
            title: "Guest"
    });}
    else{
        res.render("home", {
            title: name
        });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

