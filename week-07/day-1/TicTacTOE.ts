// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file's content
export {};

//for ts-node:
import * as pathLib from "path";
console.log(pathLib.resolve("."));

//for to have variables as a path
console.log(__dirname, __filename);

const fs = require("fs");
function createArrayfromFile(file: string) {
  try {
    let myArray: string[] = fs.readFileSync(file, "utf8").split("");
    return myArray;
  } catch {
    console.log("File not found");
    return [];
  }
}

function ticTacResult(file: string) {
  let m = createArrayfromFile(file).filter(
    //m = modifiedArray
    (e) => e !== "\n" && e !== "\r"
  );

  //check for horizontal lines
  for (let i = 0; i < m.length; i += 3) {
    if (m[i] === m[i + 1] && m[i] === m[i + 2]) {
      return m[i];
    }
  }

  //check for vertical lines
  for (let i = 0; i < m.length; i++) {
    if (m[i] === m[i + 3] && m[i] === m[i + 6]) {
      return m[i];
    }
  }

  //check for diagonals
  if (m[0] === m[4] && m[0] === m[8]) {
    return m[0];
  } else if (m[2] === m[4] && m[2] === m[6]) {
    return m[2];
  }
  return "Draw";
}

console.log(ticTacResult("week-07/day-1/Inputs/win-o.txt"));
// Should print "O"

console.log(ticTacResult("week-07/day-1/Inputs/win-x.txt"));
// Should print "X"

console.log(ticTacResult("week-07/day-1/Inputs/draw.txt"));
// Should print "Draw"
