// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".
const fs = require("fs");
export function writeIntoFile(name: string) {
  try {
    fs.writeFileSync("week-07/day-1/Inputs/my-file.txt", name);
  } catch (err) {
    console.log("Unable to read file my-file.txt");
  }
}
writeIntoFile("Ada");
