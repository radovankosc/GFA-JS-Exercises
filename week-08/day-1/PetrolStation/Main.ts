import { Car } from "./Car";
import { Station } from "./Station";
let myCar = new Car();
let myStation = new Station(1000);
console.log("My car has amount of gas: " + myCar._gasAmount);
console.log("My car tank capacity is: " + myCar._capacity);
myStation.refill(myCar);
myStation.refill(myCar);
console.log(
  "After 2 times of refilling my 100l tank explored under the pressure of 2 times refilling of: " +
    myCar._gasAmount +
    " litres of gas."
);
