//We have bunnies standing in a line numbered as 1, 2, ...
// The "odd" bunnies (1, 3, ...) have the usual number of ears = 2.
// However, the even bunnies (2, 4, ...) have 3 ears each
// (because they have a raised foot).
// Write a recursive method which accepts the number of bunnies
// as a parameter and returns the total number of "ears" in the bunny line.
// The method should be able to handle invalid input (e.g. negative numbers).
export {};
function bunnies(n: number): any {
  if (n <= 0) {
    return "Add positive number";
  } else if (n === 1) {
    return 2;
  } else if (n % 2 == 0) {
    //even has 3 ears
    return 3 + bunnies(n - 1);
  } else {
    return 2 + bunnies(n - 1);
  }
}
console.log(bunnies(0));
console.log(bunnies(3));
console.log(bunnies(5));
console.log(bunnies(10));
