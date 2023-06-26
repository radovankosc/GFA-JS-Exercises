import { addNum } from "./math";
import { divide } from "./math";
import { isPrime } from "./math";

describe("addition test", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(addNum(1, 2)).toBe(3);
    expect(addNum(1, 2)).toEqual(3);
  });
  test("should equal to 1 if we add 0 to 1", () => {
    expect(addNum(1, 0)).toBe(1);
  });

  test("should be the same 1 + 2 or 2 + 1", () => {
    expect(addNum(1, 2)).toBe(addNum(2, 1));
  });
});

describe("is prime tests", () => {
  test("7 should be a prime", () => {
    expect(isPrime(7)).toBeTruthy();
  });

  test("6 shouldn't be a prime", () => {
    expect(isPrime(6)).toBeFalsy();
    expect(isPrime(6)).not.toBeTruthy();
  });
});

describe.only("division tests", () => {
  test("if we provide 0 as second parameter it should throw an error", () => {
    expect(() => {
      divide(1, 0);
    }).toThrowError("Unable to divide by 0");
  });
});

test("adds 1 + 2 to equal 3", () => {
  expect(addNum(1, 2)).toBe(3);
  expect(addNum(1, 2)).toEqual(3);
});

test("dummy example", () => {
  let a = { a: 1 };
  let b = { a: 1 };
  expect(a).toEqual(b);
  // expect(a).toBe(b); // it'll fail because of the reference types
});
