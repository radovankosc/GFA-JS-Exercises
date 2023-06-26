'use strict';
// Create a promise that after a delay of 300ms, rejects with an Error object.
// The Error object should be constructed with parameter 'REJECTED!', which is
// the textual message of the error.

// Create a function onReject to print error.message using console.log. Pass
// this function as a rejection handler to the then method of your promise.

    let promise = new Promise((fulfill,reject) => {
        setTimeout(() => {
            reject(new Error ("REJECTED!"))
        }, 600);
    });    
    
    function onReject (error) {
        console.log(error.message)
      }    
  
     promise.then("fullfill", onReject)