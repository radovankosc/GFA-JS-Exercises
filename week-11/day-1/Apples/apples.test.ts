import { Apples } from "./apples";
// Create a test method
// Instantiate an Object from your class in the method
// Use the toEqual() matcher
// The expected parameter should be the same string (eg. 'apple')
// The actual parameter should be the return value of the method (eg. myobject.getApple())
// Run the test
// Change the expected value to make the test failing
// Run the test
// Fix the returned value to make the test succeeding again

test("It should return string: apple", () => {
  // Create a test method
  const apple1 = new Apples();
  expect("apple") // The expected parameter should be the same string (eg. 'apple')
    .toEqual(apple1.getApple()); // The actual parameter should be the return value of the method (eg. myobject.getApple())
});
