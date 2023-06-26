// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input
export{}
var input: number = 10;
function factorial(x: number){
    var result = 1; //it must be 1, because we can not devide by 0
    for(let i = 1; i <= input; i++){
        result = result * i;
    }
    return result;
}
console.log(factorial(input));