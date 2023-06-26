// Create a method that find the 5 most common lottery numbers in lottery.csv
//zk
// let str = "adela";
// let max = 0;
// let char = "";
// str.split("").forEach((item) => {
//   let current = str.split(item).length;
//   if (current > max) {
//     max = current;
//     char = item;
//   }
// });

// console.log(char + " occurred " + (max - 1) + " times");
export {};
let str = "adela";
let max = 0;
let char = "";
let str2 = "";
str.split("").forEach((item) => {
  let current = str.split(item).length;
  if (current > max) {
    max = current;
    char = item;
  }
});

console.log(char + " occurred " + (max - 1) + " times");
