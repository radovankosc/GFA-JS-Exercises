export{}
//Create a list with the following items:
// 500, 1000, 1250, 175, 800 and 120
let list: number[] = [500, 1000, 1250, 175, 800, 120];
// Create an application which prints out the answers to the following questions:
// How much did we spend?
let sum: number = 0;
for(let i in list){
    sum += list[i];
}
console.log("We spent: " + sum);
//another solution
console.log("We spent: " + list.reduce((a, b) => a + b));
// Which was our greatest expense?
console.log("Greatest expence: " + Math.max(...list));
// Which was our cheapest spending?
console.log("Cheapeste expence: " + Math.min(...list));
// What was the average amount of our spendings? (print this as a float value)
console.log("Average: " + (sum / list.length).toFixed(4));
