'use strict';

var lineCount = 4;
let star = "";
for(let i = 1; i <= lineCount; i++){
    for (let j = 1; j <= i; j++){ //if we want whole square j<=lineCourt
    star += "*";  
    }
    star += "\n";    
}
console.log(star)

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is