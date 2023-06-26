// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful
export {};
const fs = require("fs");
function copy(fileNameFrom: string, fileNameTo: string): boolean {
  let succesfullyCoipied = true;
  try {
    let fileContent = fs.readFileSync(fileNameFrom, "utf8");
    fs.writeFileSync(fileNameTo, fileContent);
    return succesfullyCoipied;
  } catch (err) {
    return (succesfullyCoipied = false);
  }
}

console.log(
  copy("week-07/day-1/Inputs/my-file3.txt", "week-07/day-1/Inputs/my-file4.txt")
);
