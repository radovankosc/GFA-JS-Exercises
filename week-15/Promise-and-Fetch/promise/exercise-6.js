"use strict";

//with success, RESOLVE
let promise1 = Promise.resolve("I promise I am asynchronous, so I will have a last word!");
promise1.then(console.log)
    .then(console.log("First words!"))
    .catch((err) => {
        console.error('THERE IS AN ERROR!!!');
        console.error(err.message);
    })
    .finally(console.log("Last words are not lasts, because promise1 is tooooo late... no worries... he is just asynchronomentalonous.!"));

//unsuccess, REJECT

let promise2 = Promise.reject(new Error("I am an Error!"));
promise2.then(console.log("Something to try... we can call then() on the reject also..."))
.catch((err) => {
    console.error('THERE IS AN ERROR 2!!!');
    console.error(err.message);
})
.finally(console.log("Last words are not lasts, because promise1 is realy tooooooooooo late... he is realy asynchronomentalonous.!"));

//something simple:

// var promise = new Promise(function (fulfill, reject) {
//     fulfill('SECRET VALUE');
//   });
//simple way:
let promiseFulfill = Promise.resolve('FULFILLED VALUE');

// var promise = new Promise(function (fulfill, reject) {
//     reject(new Error('SECRET VALUE'));
//   });
//simple way:
let promiseReject = Promise.reject(new Error('REJECTED VALUE'));

promiseFulfill.then(console.log);
promiseReject.catch(console.log)