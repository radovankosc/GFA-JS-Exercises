//Given a non-negative integer n, return the sum of its digits recursively
//(without loops).
export {};
function sumDigit(n: number): number {
  if (n < 1) {
    return 0;
  } else {
    return (n % 10) + sumDigit(Math.floor(n / 10));
  }
}

console.log(sumDigit(64));
