import { Animal } from "./Animal";
export class Farm {
  _listOfAnimals: Animal[];
  _limit: number;
  constructor(limit: number) {
    this._listOfAnimals = [];
    this._limit = limit;
  }
  breed() {
    if (this._listOfAnimals.length < this._limit) {
      this._listOfAnimals.push(new Animal(50, 50));
    }
  }
  sell(): Animal[] {
    let arrayOfHunger: number[] = []; // this array must be defined as a first
    for (let i = 0; i < this._listOfAnimals.length; i++) {
      arrayOfHunger.push(this._listOfAnimals[i]._hunger); // returns array of all hungers
    }
    let min: number = Math.max(...arrayOfHunger); //returns the most hunger animal
    let indexOfLeastHunger = arrayOfHunger.indexOf(min);
    this._listOfAnimals.splice(indexOfLeastHunger, 1);
    return this._listOfAnimals;
  }
}

//numbers.sort((a, b) => a + b); ASCENDING ORDER
// const hungerAnimal = Math.min(this._listOfAnimals[i]._hunger);
//       console.log(hungerAnimal);
//     this._listOfAnimals.splice(i, 1);
//   }
// sell(list: Animal[]): number[] {
//   for (let i = 0; i < this._listOfAnimals.length; i++) {
//     let arrayOfHunger: number[] = [];
//     arrayOfHunger.push(this._listOfAnimals[i].getHunger());
//     return arrayOfHunger;
//   }
// }
// }
// const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
// const min = Math.min(...arr)
// console.log(min)
