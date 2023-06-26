"use strict";
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.listen(port);

app.use(express.json());

app.post("/translate", (req, res)=>{
    //if the input doesn't contain the text (and the language) or its empty, respond with:
    
    if(req.body.text && req.body.lang)
    {       
        const text = req.body.text;//"Ez egy példamondat. Remélem célbatalál."
        let lang = req.body.lang;//"hu"
        lang = "gibberis";
        let translatedText = "";
        
        let toWords = text.split(" ");
        
        let wordsExtended = [];
        for(let i = 0; i < toWords.length; i++){
            if(toWords[i].endsWith(".")){
                let wordWithDot = toWords[i].slice(0,-1);
                wordWithDot +="idig.";
                wordsExtended.push(wordWithDot);
            }else{
                    toWords[i] +="idig";
                    wordsExtended.push(toWords[i])
                    }
                }
        translatedText = wordsExtended.toString().replace(/,/gi," "); 
    
        res.json({
            "translated": translatedText,
            "lang": lang
          });  
        
    } else{res.json({
            "error": "I can't translate that!"
        })
    }

})