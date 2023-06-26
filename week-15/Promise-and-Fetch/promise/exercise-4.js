"use strict";

// create a promise using the Promise constructor as we have been doing.

// In the promise’s executor, immediately attempt to fulfill the promise with a
// value of 'I FIRED'.

// Then, after the fulfill call, immediately try to reject the promise with an
// Error created with parameter 'I DID NOT FIRE'.

// After the promise creation, create a function onRejected with one parameter
// error that prints the Error’s message with console.log.

// Lastly, pass console.log and the function you just created as the success
// and rejection handlers respectively.

// If successful, your script should only log “I FIRED” and should not log
// “I DID NOT FIRE”.

let promise = new Promise ((resolve, reject) => {
    resolve("I FIRED");
    reject(new Error ("I DID NOT FIRE"))
});

function onReject(error){
    console.log(error.message)
}

promise.then(console.log, onReject);