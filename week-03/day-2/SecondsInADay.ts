let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let currentSecondsNow = (currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds;
let secondsADay: number = 24 * 60 * 60;
let remainingSeconds = secondsADay - currentSecondsNow;
console.log("There are " + remainingSeconds + " reains until the end of a day.")
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables