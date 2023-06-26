// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"
const fs = require("fs");

function openFile(fileName: string) {
  try {
    let fileContent = fs.readFileSync(fileName, "utf8");
    console.log(fileContent);
  } catch (e: any) {
    console.log(
      "What does the Node says " +
        e +
        "\nWhat we want to say: " +
        "Unable to read file: my-file.txt"
    );
    //another solution:
    // throw new Error(`Unable to read file: ${fileName}`);
  }
}

openFile("week-07/day-1/Inputs/my-file2.txt");
openFile("week-07/day-1/Inputs/my-file.txt");
