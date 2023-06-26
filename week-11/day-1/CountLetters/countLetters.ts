// Write a function, that takes a string as an argument and returns a dictionary with all
//letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that
export function countLetters(myStr: string): Map<string, number> {
  let myMap: Map<string, number> = new Map();

  for (let i = 0; i < myStr.length; i++) {
    let howManyTimes: number = 0;
    for (let j = 0; j < myStr.length; j++) {
      if (myStr[i] === myStr[j]) {
        howManyTimes++;
      }
    }
    myMap.set(myStr[i], howManyTimes);
  }

  return myMap;
}

console.log(countLetters(""));
