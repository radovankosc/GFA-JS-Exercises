export function collSeq(n: number): number[] {
  if (n <= 0) {
    throw new Error("Number must be greater than 0");
  }
  const arrOfResults: number[] = [n];

  do {
    const lastElement: number = arrOfResults[arrOfResults.length - 1];
    if (lastElement != 1) {
      if (lastElement % 2 == 0) {
        const evenElement = lastElement / 2;
        arrOfResults.push(evenElement);
      }
      if (lastElement % 2 == 1) {
        const oddElement = lastElement * 3 + 1;
        arrOfResults.push(oddElement);
      }
    }
  } while (arrOfResults[arrOfResults.length - 1] != 1);

  return arrOfResults;
}

try {
  console.log(collSeq(3));
} catch (e: any) {
  console.log(e.message);
}
