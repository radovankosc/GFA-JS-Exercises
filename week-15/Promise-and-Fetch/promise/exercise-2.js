'use strict';

// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
// executor after a delay of 300ms, using setTimeout.

// Then, print the contents of the promise after it has been fulfilled by passing
// console.log to then.

    let promise = new Promise((fulfill,reject) => {
        setTimeout(() => {
            fulfill('FULFILLED!')
        }, 600);
    });
    
    promise.then(console.log);