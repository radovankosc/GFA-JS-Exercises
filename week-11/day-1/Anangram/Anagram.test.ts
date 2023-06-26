// testing only function without a class = no needs a class and import class, decribe, create class and than call funcion
import { isAnagram } from "./Anagram";

test("Should return true if two strings are anagrams", () => {
  expect(isAnagram("ada", "dda")).toBeTruthy();
});

test("Should return true if two strings are anagrams", () => {
  expect(isAnagram("adda", "dda")).not.toBeTruthy();
});
