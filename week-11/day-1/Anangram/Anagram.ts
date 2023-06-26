// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

// testing only function without a class = no needs a class and import class, decribe, create class and than call funcion
export function isAnagram(myStr1: string, myStr2: string): boolean {
  let myArr1 = myStr1.split("");
  for (let i = 0; i < myArr1.length; i++) {
    if (myStr1.length == myStr2.length && myStr2.includes(myStr2[i]))
      return true;
  }
  return false;
}
