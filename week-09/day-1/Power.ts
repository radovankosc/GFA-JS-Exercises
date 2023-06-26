//Given base and n that are both 1 or more, write a recursive method (no loops)
// which returns the value of base to the n-th power, so powerN(3, 2) is 9 (3 squared).
export {};
function power(base: number, n: number): any {
  if (base === 0 && n === 0) {
    console.log("Zero to zero is not possible");
    return 0;
  } else if (base === 0 && n > 0) {
    console.log("Add positive base number.");
    return 0;
  } else if (base > 0 && n === 0) {
    //Zero power of every number (exept 0) is 1;
    return 1;
  } else {
    return base * power(base, n - 1);
  }
}
console.log(power(3, 2));
console.log(power(0, 2));
console.log(power(3, 0));
console.log(power(0, 0));
