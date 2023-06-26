let numberToSwap1: number = 123;
let numberToSwap2: number = 526;
/*First option*/
[numberToSwap1, numberToSwap2] = [numberToSwap2, numberToSwap1];
console.log(numberToSwap1);
console.log(numberToSwap2);
/*Second option*/
let temp;
temp = numberToSwap1;
numberToSwap1 = numberToSwap2;
numberToSwap2 = temp;
console.log(numberToSwap1);
console.log(numberToSwap2);


