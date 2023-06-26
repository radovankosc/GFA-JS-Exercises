const express = require("express");
const mysql = require ("mysql2");
// const bodyParser = require("body-parser");
// const { Router } = require("express");
const app = express.Router();
const mysqlError = 'Something went wrong, please try again later';

let connection = mysql.createConnection({
    host: "localhost",
    user: "gfa",
    database: "quiz",
  });
  connection.connect((error) => {
    if (error) {
      throw error;
    }
    console.log("Successfully connected to database from server.js");
  });  
  
  app.use(express.json());

  app.get("/game", (req, res) =>{
    
    connection.query('SELECT * FROM questions;',
    (err, amountOfQuestions) => {
        if(err) {
            res.status(500).send(mysqlError);
            return;
        }

        let questionsNum = Math.floor(Math.random() * (amountOfQuestions.length - 1 + 1) + 1);
        
        connection.query(
            `SELECT * FROM questions WHERE id = ?;`,
            [questionsNum],
            (err, questions) => {
              if (err) {
                console.log(err);
                res.status(500).send(mysqlError);
                return;
              }
              
              connection.query(
                `SELECT * FROM answers WHERE question_id = ?;`,
                [questionsNum],
                (err, answersFromDb) => {
                  if (err) {
                    console.log(err);
                    res.status(500).send(mysqlError);
                    return;
                  }

                  let result = {id: questions[0].id, questions: questions[0].question, answers : answersFromDb}
                  // res.status(200).json(result); //because query is array!!! and I want first match
                  
                  res.render("index", result);
                });              
            });
    });
  });

  app.get("/game/getAnswers", (req, res) =>{
    
    connection.query('SELECT * FROM questions;',
    (err, amountOfQuestions) => {
        if(err) {
            res.status(500).send(mysqlError);
            return;
        }

        let questionsNum = Math.floor(Math.random() * (amountOfQuestions.length - 1 + 1) + 1);
        
        connection.query(
            `SELECT * FROM questions WHERE id = ?;`,
            [questionsNum],
            (err, questions) => {
              if (err) {
                console.log(err);
                res.status(500).send(mysqlError);
                return;
              }
              
              connection.query(
                `SELECT * FROM answers WHERE question_id = ?;`,
                [questionsNum],
                (err, answers) => {
                  if (err) {
                    console.log(err);
                    res.status(500).send(mysqlError);
                    return;
                  }

                  let result = {id: questions[0].id, questions: questions[0].question, answers : answers}
                  res.status(200).json(result); //because query is array!!! and I want first match
                });              
            });
    });
  });

  app.get("/questions", (req, res) => {

    connection.query(
        `SELECT * FROM questions`,
        (err, data) => {
          if (err) {
            console.log(err);
            res.status(500).send(mysqlError);
            return;
          }
          res.status(200).json(data); //data is array of questions
        }
      );
  })

  app.post("/questions", (req, res) => {
    const question = req.body.question;
    const answers = req.body.answers;
    
    connection.query(
        `INSERT INTO questions (question) VALUES (?)`,
        [question],
        (err, questionResult) => {
          if (err) {
            console.log(questionResult.insertId);
            res.status(500).send(mysqlError);
            return;
          }   

          for(let i = 0; i < answers.length; i++){                  
              connection.query(
                  `INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, ?)`,
                  [questionResult.insertId, answers[i].answer, answers[i].is_correct],
                  (err, data) => {
                      if (err) {
                          res.status(500).send(mysqlError);
                          return;
                        }
                        
                    });                          
                }
                res.sendStatus(200);           
        });
  });

  app.delete("/questions/:id", (req, res) => {
    
    const id = req.params.id;
    connection.query(
        `DELETE FROM questions WHERE id = ?;`,
        [id],
        (err, data) => {
          if (err) {
            res.status(500).send(mysqlError);
            return;
        }
        if (data.affectedRows === 0) {
            res.status(400).send('Question not found in the database');
            return;
          }
        
          connection.query(
                `SELECT * FROM answers WHERE question_id = ?`,
                [id],
                (err, answersIds) => { //answersIds: [ , , , ].id
                      if (err) {
                            console.log(err);
                            res.status(500).send(mysqlError);
                            return;
                          }

                          for(let i = 0; i < answersIds.length; i++){
                            connection.query(`DELETE FROM answers WHERE id = ?`,
                                [answersIds[i].id],
                                (err, data) => {
                                    if (err) {
                                        console.log(err);
                                        res.status(500).send(mysqlError);
                                        return;
                                    }                                    
                                });
                          }
                          res.status(200).send("Question and answers deleted from db");
                }); 
        });
  });
  
module.exports = app;