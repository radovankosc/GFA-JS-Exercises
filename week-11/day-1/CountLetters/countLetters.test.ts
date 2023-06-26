import { countLetters } from "./countLetters";
test.only("test counterLetter function for not Null return", () => {
  expect(countLetters("ada")).not.toBeNull();
});
