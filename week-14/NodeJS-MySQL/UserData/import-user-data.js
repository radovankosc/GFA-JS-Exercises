const mysql = require('mysql2');
const express = require("express");
const { query } = require('express');
const { readFileSync } = require('fs');
const app = express();
const PORT = 8080;
const fs = require("fs");

const conn = mysql.createConnection({
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

conn.query(//height should be FLOAT(6) NOT NULL DEFAULT '0', but if so -> mysql error column is truncated, 
//how to handle empty space in column from content? 
    `CREATE TABLE IF NOT EXISTS users (
        user_id INT NOT NULL,
        prefix varchar(20),
        first_name TEXT,
        last_name TEXT,
        address TEXT,
        height TEXT, 
        bitcoin_addres TEXT,
        color_preference TEXT,
        PRIMARY KEY (user_id))`,
        (error, result) =>{
            if (error){
                throw error;
            }
            console.log("Succesfully created table 'users'")
        }
);

//get the data: array of string
const fileName = "C:\\Users\\simko\\OneDrive\\Desktop\\greenfox\\Karcoolka\\week-14\\NodeJS-MySQL\\UserData\\data.csv"
let content = fs.readFileSync(fileName, "utf-8").split("\n");//splited by line
for(let i = 1; i < content.length; i++){   
    let words = content[i].split(",");//every line splited by word
    let id = words[0];
    let prefix = words[1];
    let first_name = words[2];
    let last_name = words[3];
    let address = words[4];
    let height = words[5];
    let bitcoin_address = words[6];
    let color_preference = words[7];
    
conn.query(`INSERT INTO users (user_id, prefix, first_name, last_name, address, height, bitcoin_addres, color_preference) values (?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, prefix, first_name, last_name, address, height, bitcoin_address, color_preference],
    (error,result)=> {
        if (error){
            conn.query('DELETE FROM users')//if error occurs delete from user does not work to clean the table
            throw error
        }

        //write a test
        if (result.affectedRows > 0){
            console.log("Succesfully inserted into table 'users'");
        }
    })
}

//test function that confirms that the CSV file has the same records as the imported table
function testContent(csvContent, tableContent){

}

