// Create a function that
// - takes the name of a CSV file as a parameter,
//   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - and returns the year when the most births happened.
//   - if there were multiple years with the same number of births then return any of them

// You can find such a CSV file in this directory named births.csv
// If you pass "births.csv" to your function, the result should be either 2006 or 2016.
export {};
const fs = require("fs");
function birth(file: string): number | undefined {
  try {
    //slice the file into array of strings(births)
    let content = fs.readFileSync(file, "utf8").split("\n");
    let arrayOfBirths: number[] = [];
    for (let i = 0; i < content.length; i++) {
      let b = content[i].indexOf(";"); //b = beginningOfSlicing
      let e = content[i].lastIndexOf(";") - 6; //e = endOfSlicing
      let oneLine: string = content[i].slice(b + 1, -(content[i].length - e));
      let numberOnLine: number = parseInt(oneLine);
      arrayOfBirths.push(numberOnLine);
    }

    //create ordered map
    let n = arrayOfBirths.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
      if (map.has(arrayOfBirths[i])) {
        // returns true if the key exists, false otherwise
        map.set(arrayOfBirths[i], map.get(arrayOfBirths[i]) + 1);
      } else {
        map.set(arrayOfBirths[i], 1);
      }
    }

    //find most frequent
    let max_count: number = 0;
    let most_frequent: number = -1;
    map.forEach((value, key) => {
      if (max_count < value) {
        most_frequent = key;
        max_count = value;
      }
    });
    return most_frequent;
  } catch (err) {
    console.log("File not found");
  }
}
birth("week-07/day-1/Inputs/bbirths.csv");
console.log("after error");
