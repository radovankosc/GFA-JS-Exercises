export class Sum {
  sum(myArr: number[]): number {
    if (myArr.length === 0) {
      throw new Error("Array is empty, unable to make a sum.");
    } else {
      let result: number = myArr.reduce(function (a, b) {
        return a + b;
      });
      return result;
    }
  }
}
