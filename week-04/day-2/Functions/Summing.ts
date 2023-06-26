// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter
export{}
var input: number = 100;
function sum (x: number): number{
    let result = 0;    
    for (let i = 1; i <= x; i++){
    result += i; //result = result + i
    }
    return result;
}
console.log(sum(input));
