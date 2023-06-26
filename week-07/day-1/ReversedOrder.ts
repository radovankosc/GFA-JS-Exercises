export {};
const fs = require("fs");
function reverseOrder(file: string) {
  try {
    let content = fs.readFileSync(file, "utf8");
    let reversed = content
      .split("\n")
      .reverse()
      .toString()
      .replace(/,/gi, "\n");
    fs.writeFileSync("week-07/day-1/Outputs/reversedOrder.txt", reversed);
    console.log("Succesfull decryption!");
  } catch (err) {
    console.log("ooooooh, that is not succesfull!!!");
    throw err;
  }
}
reverseOrder("week-07/day-1/Inputs/reversedOrder.txt");
