'use strict';
let chessTable = "";
let nOfChess = 8;
for(let i = 0; i < nOfChess / 2; i++){
    for (let j = 0; j < nOfChess; j++){
        if (j % 2 === 0){
            chessTable += " ";
        }
        else {
            chessTable += "%";
        }
    }
    chessTable += "\n"
    for (let j = 0; j < nOfChess; j++){
        if (j % 2 === 0){
            chessTable += "%";
        }
        else {
            chessTable += " ";
        }
    }
    chessTable += "\n";
}
console.log(chessTable)

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//