// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
export {};
const fs = require("fs");

function countLines(fileName: string): number {
  try {
    let fileContent = fs.readFileSync(fileName, "utf8");
    return fileContent.split("\n").length;
  } catch {
    return 0;
  }
}
console.log(countLines("week-07/day-1/Inputs/my-file.txt"));
