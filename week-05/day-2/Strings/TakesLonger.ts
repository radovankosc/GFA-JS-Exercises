'use strict';
// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let i = quote.indexOf("you");
let insertStr = "always takes longer than";
quote = quote.slice(0, i) + insertStr + " " + quote.slice(i);
console.log(quote);