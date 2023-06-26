//We have a number of bunnies and each bunny has two big floppy ears.
// Write a recursive method (no loops or multiplication) which takes the number of bunnies
// as its sole parameter and returns the total number of ears the bunnies have.
// The method should be able to handle invalid input (e.g. negative numbers)

//solution with returns type any...
// export {};
// function bunnies(numberOfBunnies: number): any {
//   if (numberOfBunnies === 0) {
//     return 0;
//   } else if (numberOfBunnies === 1) {
//     return 2;
//   } else if (numberOfBunnies < 0) {
//     return "Have you really killed: " + -numberOfBunnies + " bunnies???!";
//   } else {
//     return 2 + bunnies(numberOfBunnies - 1);
//   }
// }
// console.log(bunnies(0));
// console.log(bunnies(-5));
// console.log(bunnies(5));
// console.log(bunnies(1));

//solution with the return type number + caught and handled exeptions
export {};
function bunnies(numberOfBunnies: number): number {
  if (numberOfBunnies === 0) {
    return 0;
  } else if (numberOfBunnies === 1) {
    return 2;
  } else if (numberOfBunnies < 0) {
    throw new Error("MY error!!");
  } else {
    return 2 + bunnies(numberOfBunnies - 1);
  }
}
console.log(bunnies(0));
try {
  console.log(bunnies(-5));
} catch {
  console.log("You cannot have negative number of bunnies");
}

console.log(bunnies(5));
console.log(bunnies(1));
