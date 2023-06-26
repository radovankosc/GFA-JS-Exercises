export{}
'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  and returns the indices of the numbers of the array which contain the given number
//  or returns an empty list (if the number is not part of any of the numbers in the array)
// Example



function findMatchingIndexes(x: number, arr: number []): number[]{
    let matchingIndexes: number[] = [];
    arr.forEach(function (e, i) {
        if(e.toString().search(x.toString()) > -1){
            matchingIndexes.push(i);
        }
    });   
return matchingIndexes;
}
console.log(findMatchingIndexes(1, [1, 11, 34, 52, 61]));
//should print: `[0, 1, 4]`
console.log(findMatchingIndexes(9, [1, 11, 34, 52, 61]));
//should print: '[]'