// Write a function called `findUniqueItems()` that takes a list of numbers
// as a parameter and returns a list of numbers in which every number is unique
// (occurs only once)

export function findUniqueItems(numbers: number[]): number[] {
  let uniqueArray: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueArray.includes(numbers[i])) {
      uniqueArray.push(numbers[i]);
    }
  }
  return uniqueArray;
}

// Example
console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]));
// should print: `[1, 11, 34, 52, 61]`
