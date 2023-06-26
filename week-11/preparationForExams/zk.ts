import { TIMEOUT } from "dns";

export {};
let array: number[] = [5, 3, 2];

let a = array.forEach((el) => {
  return el + 3;
});

setTimeout(() => console.log("Ahoj"), 2000);
console.log(array);

for (let a = 0; a < array.length; a++) {
  let i = 0;
  if ((a = 5)) {
    console.log("is 5");
    i++;
    console.log(i);
  }
  if (a < 6) {
    console.log("is less then 6");
    i++;
    console.log(i);
  }
  console.log(a);
}
let b = 5;
while (b === 6) {
  console.log("fff");
}

let str = "abcd";
