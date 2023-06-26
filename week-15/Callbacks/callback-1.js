'use strict';
// Exercise 1:
// The mapWith() function should iterate over the given array and call the callback function on every element.
// It stores the callback return values in the output.
// The mapWith() should return with the output array.

const mapWith = (array, callback) => {
  let output = [];
  for(let part of array){
   output.push(callback(part))
    }
  return output;
}

const addOne = (number) => { //arow function syntax stored in variable, withou parenthesis
  return number + 1;
}

//expected result: [2, 3, 4]
console.log(mapWith([1, 2, 3], addOne));

// Exercise 2:
// Create a callback function which removes every second character from a string

//no parentheses -> arrow function syntax
let removeSecondLetter = word => { //word is basicly part from forloop from parent function mapWith
  let result = [];//for everey single letter in word pushed into array
  let arrayWord = word.split("");
  for(let i = 0; i < arrayWord.length; i += 2){
    result.push(arrayWord[i])
  }  
  return result.join("");
}

// expected result: ['mp','rdc', 'fle']
const words = ['map', 'reduce', 'filter'];
console.log(mapWith(words, removeSecondLetter));