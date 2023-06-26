// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements of `numbers` to the console
export{}
var numbers = [3, 4, 5, 6, 7];
var sum: number = 0;
for (const i in numbers) {
    sum += numbers[i];
    }
console.log(sum);

//another solution
var sum2 = numbers.reduce(function(a, b){
    return a + b
    }
)
console.log(sum2);

//another solution
var sum3 = numbers.reduce((a, b) => (a + b));
console.log(sum3);