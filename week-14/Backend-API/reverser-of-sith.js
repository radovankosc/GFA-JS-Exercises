"use-strict";
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Conected to localhost : ${PORT}`));

//MIDLEWARE(feature from express)
app.use(express.json());

app.post('/sith',(req, res)=> {
    if (req.body.text === undefined){ //it has "text"
        res.json({
            "error": "Feed me some text you have to, padawan young you are. Hmmm."
          });
    }

const myText = req.body.text; //"This is my example sentence. Just for fun."
let myWords = myText.toLowerCase().split(" ");

//code to modify Sith speach
for(let i = 0; i < myWords.length; i+=2){
        if(!myWords[i].includes(".")){
            if(!myWords[i+1].includes(".")){
                let temp = myWords[i+1];
                myWords[i+1] = myWords[i];
                myWords[i] = temp;
            }
        }
    }
let mySwappedText = myWords.toString().replace(/,/gi, " ");
let splitedSentences = mySwappedText.split(". ");

let firstSentence = splitedSentences[0].charAt(0).toUpperCase() + 
splitedSentences[0].slice(1);
let secondSentence = splitedSentences[0].charAt(1).toUpperCase() + 
splitedSentences[0].slice(2);

let sithSpeach = firstSentence + ". Arrgh. Uhmm. " + secondSentence + ". Err..err.err."

res.json({"sith_text": sithSpeach}); //it replies with "sith_text"

});

