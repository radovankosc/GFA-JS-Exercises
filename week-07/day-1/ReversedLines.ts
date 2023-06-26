export {};
const fs = require("fs");
function decryption(file: string) {
  try {
    let content: string = fs.readFileSync(file, "utf8");
    let decrypted: string = content
      .split("")
      .reverse()
      .toString()
      .replace(/,/gi, "") // returns readable lines, but lines are in wrong order from end to beginning, because whole file(as a string) has been reversed
      .split("\n")
      .reverse()
      .toString()
      .replace(/,/gi, "\n"); //returns right order

    fs.appendFileSync("week-07/day-1/Outputs/reversedLines.txt", decrypted);
  } catch (err: any) {
    console.log(`Cannot read a file! Because ${err.message}`);
  }
}
decryption("week-07/day-1/Inputs/reversed.txt");
