"use strict";
//IMPORTS:
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

console.log("bezi to");

app.post("/arrays",(req,res)=>{
    const myArr = req.body.numbers;
    if(req.body === undefined){
        res.json({
            "error": "Please provide what to do with the numbers!"
          });
    }

    if(req.body.what === "sum"){
        let summedArrNum = 0;
            for(let i = 0; i < myArr.length; i++){
                summedArrNum += myArr[i];
            }
            res.json({
                "result": summedArrNum
            })
        }
    
    if(req.body.what === "multiply"){
        let multiplyArrNum = 1;
        for(let i = 0; i < myArr.length; i++){
            multiplyArrNum *= myArr[i];
        }
        res.json({
            "result": multiplyArrNum
        })
    }

    if(req.body.what === "double"){
        let doubledArr = [];
        for(let i = 0; i < myArr.length; i++){
            doubledArr.push(myArr[i]*2);
        }
        res.json({
            "result": doubledArr
        })
    }
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
