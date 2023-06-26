export {};
var numbers = [1, 3, 5, 7];
console.log(numbers[2]);

// -  Create a variable named `numbers`
//    with the following content: `[1, 3, 5, 7]`
// -  Print the third element of `numbers`

function highAndLow(numbers: string) {
  let myArray = numbers.split(" ");
  let modifiedArray = myArray.map(function (e) {
    return parseInt(e);
  });
  let sortedArr = modifiedArray.sort(function (a, b) {
    return a - b;
  });
  let response =
    sortedArr[0].toString() + " " + sortedArr[sortedArr.length - 1].toString();
  return response;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

let a: string = "ahoj cau";
let b: string[] = a.split("");
console.log(b);
