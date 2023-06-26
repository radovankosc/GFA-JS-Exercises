import { Ship } from "./ship";
export class Armada {
  _listOfShips: Ship[] = [];

  fillArmada(): void {
    let shipInArmada = new Ship();
    for (let i = 0; i < Math.floor(Math.random() * 10 - 1 + 1) + 1; i++) {
      this._listOfShips.push(shipInArmada);
    }
  }

  war(otherArmada: Armada): boolean {
    for (let i = 0; i < this._listOfShips.length; i++) {
      for (let j = 0; j < otherArmada._listOfShips.length; j++) {
        if (this._listOfShips[i].battle(otherArmada._listOfShips[j]) === true) {
          otherArmada._listOfShips.splice(j, 1);
        }
      }
    }
    if (this._listOfShips.length > otherArmada._listOfShips.length) {
      return true;
    }
    return false;
  }
}
