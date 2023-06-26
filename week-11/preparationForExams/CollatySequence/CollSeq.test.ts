import { collSeq } from "./CollSeq";
describe("Function collSeq test ", () => {
  test("function collSeq should return even/odd- // -", () => {
    expect(collSeq(3)).toEqual([3, 10, 5, 16, 8, 4, 2, 1]);
  });
  test("function collSeq should throw Error if parameter <= 0", () => {
    expect(() => {
      collSeq(0);
    }).toThrowError("Number must be greater than 0");
  });
  test("Last element of returned array should be 1", () => {
    let myArray = collSeq(3);
    let lastElement = myArray[myArray.length - 1];
    expect(lastElement).toEqual(1);
  });
  test("Last element of returned array should be 1", () => {
    let myArray = collSeq(3);
    let lastElement = myArray[myArray.length - 1];
    expect(lastElement).toBeGreaterThanOrEqual(1);
  });
});
