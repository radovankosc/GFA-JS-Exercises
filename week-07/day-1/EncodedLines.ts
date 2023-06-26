// Create a method that decrypts encoded-lines.txt
//pismena jsou posunutá o nějaké číslo v abecedě...o -1
export {};
const fs = require("fs");
function encode(file: string) {
  let contentOfLines: string = fs.readFileSync(file, "utf8");
  let encoded: string[] = [];
  for (let i = 0; i < contentOfLines.length; i++) {
    let result = contentOfLines.charCodeAt(i);
    let letter = String.fromCharCode(result - 1);
    encoded.push(letter);
    //can be encoded: string straith ahead? Instance of create array and than to string?
    //encoded.concat(letter)
  }
  let encodedString = encoded
    .toString()
    .replace(/,/gi, "")
    .replace(/	/g, "\n")
    .replace(//gi, " ");
  console.log(encodedString);
}

encode("week-07/day-1/Inputs/encoded.txt");
