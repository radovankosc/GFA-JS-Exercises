//Write a recursive function that takes one parameter: n and returns the sum of
//numbers (integers) from 1 to n. The function should return 0 for inputs less than 1.
export {};
function factorial(n: number): number {
  if (n < 1) {
    //base case
    return 0;
  } else {
    return n + factorial(n - 1);
  }
}

console.log(factorial(5));
