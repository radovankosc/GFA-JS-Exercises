import { Domino } from "./Domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value.getValues()[0], value.getValues()[1]);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
console.log(dominoes);

let domino: Domino = dominoes[4]; //vypise 1 objekt z arraye objektů (dominoes)
let values: number[] = domino.getValues(); //jeden objekt ma metodu getValues, která vraraci array cisel (0 a 1)
let num = dominoes[1].getValues()[0]; //v arrayi dominoes na indexu 1 volame metodu, ktera vraci array cisel [0,1]
//console.log(dominoes[4].getValues()[0]);

function sort(unsorted: Domino[]): Domino[] {
  let sorted: Domino[] = []; //Array do které budeme ukládat

  if (unsorted && unsorted.length > 0) {
    sorted = sorted.concat(unsorted.splice(0, 1));
  }

  while (unsorted.length > 0) {
    let sortedDomino: Domino = sorted[sorted.length - 1];

    for (let i = 0; i < unsorted.length; i++) {
      let domino = unsorted[i];

      if (sortedDomino.getValues()[1] == domino.getValues()[0]) {
        sorted = sorted.concat(unsorted.splice(i, 1));
        break;
      }
    }
  }

  return sorted;
}
//print(dominoes);
print(sort(dominoes));
