// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

function divideByZero(divider: number): number {
  if (typeof divider !== "number") {
    throw new Error("fail - you did not put a number");
  } else if (divider === 0) {
    throw new Error("fail - you must put number > 0");
  } else {
    return 10 / divider;
  }
}
console.log(divideByZero(0));

// const fs = require('fs');

// let fileContent = fs.readFileSync('/path/to/myfile', 'utf-8');
// console.log(fileContent);
