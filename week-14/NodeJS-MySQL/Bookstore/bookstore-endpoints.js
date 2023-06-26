const mysql = require('mysql2');
const express = require("express");
const { query } = require('express');
const app = express();
const PORT = 8080;


let conn = mysql.createConnection({
  host: 'localhost',
  user: 'gfa',
  database: 'bookstore',
});

conn.connect((err) => {
    if (err) {
      console.error('Cannot connect to the database', err);
      return;
    }
    console.log('Connection established');
  });

app.listen(PORT, () => { console.log(`Connected to localhost: ${PORT}`) });

// --------List book titles----------
// app.get('/api', (req, res) => {
//     conn.query('SELECT book_name FROM book_mast;', (err, titles) => {
//       if (err) {
//         console.error(`Cannot retrieve data: ${err.toString()}`);
//         res.sendStatus(500);
//         return null;
//       }
//     return res.json(titles);//returns json type
//     //how to retrurn HTML file?....res.sendFile(path.join(__dirname, '/index.html'))?;
//     });
//   });

//------------List all books with full data + filtering------------
app.get("/books", (req,res) => {
    const { category, publisher, plt, pgt } = req.query;
    //plt = price lower than, pgt = price greater than 
    let selection = 'SELECT * FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id '
    
    //filters as query string parameters:
    //example /books?category=Science should only return books in the Science category.
    if (category !== undefined){
        selection += `AND category.cate_descrip = '${category}'`
    } 
    
    if (publisher !== undefined){
        selection += `AND publisher.pub_name = '${publisher}'`
    }

    if (plt !== undefined){
        selection += `AND book_price < ${plt}`
    }

    if (pgt !== undefined){
        selection += `AND book_price > ${pgt}`
    }      
    
    conn.query(selection, (err, titles) => {
        if (err){
            console.error("Cannot retrieve data: " + err.toString());
            res.status(500);
            return null;
        }
        return res.json(titles);
    });
});