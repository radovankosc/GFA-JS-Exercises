'use strict';

var lineCount = 6;
let edge = " ";
for (let j = 1; j <= lineCount; j++) {// the same: for (let j = lineCount; j > 0; j--) {
  edge += '%';
}

for (let i = 0; i < lineCount; i++) {
  if (i === 0) {
    console.log(edge);
  } else if (i === lineCount - 1) {
    console.log(edge);
  } else {
    let middle = '%';
    for (let k = 0; k < lineCount - 2; k++) {
      if (k === i - 1) {
        middle += '%';
      } else {
        middle += ' ';
      }
    }
    middle += '%';
    console.log(middle);
  }
}

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is