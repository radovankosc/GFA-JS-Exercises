'use strict';
export{}
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText applying indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let a: string = "My todo";
let b: string = " - Download games";
let c: string = " - Diablo"
todoText = todoText.slice(0,0) + a + "\n" + todoText + b + "\n" + "\t" + c;
console.log(todoText);