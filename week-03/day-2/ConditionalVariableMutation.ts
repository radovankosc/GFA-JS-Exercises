const a1 = 24;
let output1 = 0;
if (a1 % 2 == 0) {
  ++output1;
}
// if a is even increment output1 by one

console.log(output1);

const b1 = 21;
let output2 = "";
if (b1 >= 10 && b1 <= 20) {
  output2 = "Sweet";
} else if (b1 < 10) {
  output2 = "Less";
} else {
  output2 = "More";
}
// if b is between 10 and 20 set output2 to "Sweet!"
// if less than 10 set output2 to "Less!",
// if more than 20 set output2 to "More!"
console.log(output2);

const c1 = 123;
const credits = 40;
const isBonus = false;

if (credits >= 50 && isBonus === false) {
  console.log(c1 - 2);
} else if (credits < 50 && isBonus === false) {
  console.log(c1 - 1);
} else if (credits < 50 && isBonus) {
  console.log(c1);
}

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

const d1 = 7;
const time = 220;
let output3 = "";

if (d1 % 4 == 0 && time <= 200) {
  output3 = "Check";
} else if (d1 % 4 == 0 && time > 200) {
  output3 = "Time Out";
} else {
  output3 = "Run Forest Run!";
}

// if d is dividable by 4
// and time is not more than 200
// set output3 to "check"
// if time is more than 200
// set output3 to "Time out"
// otherwise set output3 to "Run Forest Run!"

console.log(output3);
