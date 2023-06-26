// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:

// Add a new test case ??? means
// Instantiate your class
// create a list of integers
// use the toEqual() matcher to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empty list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed
import { Sum } from "./sum";

describe("Sum test", () => {
  let sumClass: Sum;
  beforeEach(() => {
    sumClass = new Sum();
  });
  test("Should return sum of arrays elements", () => {
    expect(sumClass.sum([1, 2, 3])).toBe(6);
  });

  test("Should return sum of arrays elements - zero element case", () => {
    expect(() => {
      sumClass.sum([]);
    }).toThrow("Array is empty, unable to make a sum.");
  });

  test("Should return sum of arrays elements - one element case", () => {
    expect(sumClass.sum([2])).toBe(2);
  });
});
