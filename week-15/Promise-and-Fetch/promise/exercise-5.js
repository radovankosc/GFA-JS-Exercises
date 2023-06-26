"use strict";
//Proof that promises are always asynchronous.

// In the promise’s executor, immediately fulfill the promise with a value of
// 'PROMISE VALUE'.

// After the creation of the promise, pass console.log as the success handler to
// the promise.

// Finally, print out “MAIN PROGRAM” with console.log

let promise = new Promise ((resolve, reject) => {
    resolve("PROMISE VALUE");
    reject(new Error (error));
});


promise.then(console.log);
console.log("MAIN PROGRAM");