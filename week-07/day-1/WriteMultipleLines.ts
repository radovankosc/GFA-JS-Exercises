// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// - The path parameter should be a string that describes the location of the file you wish to modify.
// - The word parameter should also be a string that will be written to the file as individual lines.
// - The number parameter should describe how many lines the file should have.

// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'.
// The function should not raise any errors if it could not write the file.
export {};
const fs = require("fs");

function writeMultipleLines(path: string, word: string, amouthOfLines: number) {
  for (let i = 0; i < amouthOfLines; i++) {
    if (i == 0) {
      fs.appendFile(path, word, (err: any) => {
        // first line without parameter: "\n" + word -- for to avoid first line gap
        if (err) throw err;
      });
    } else {
      fs.appendFile(path, "\n" + word, (err: any) => {
        if (err) throw err;
      });
    }
  }
}
writeMultipleLines("week-07/day-1/Inputs/my-file3.txt", "apple", 5);
