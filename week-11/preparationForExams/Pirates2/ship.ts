import { Pirates } from "./pirates";
export class Ship {
  _listOfPirates: Pirates[] = [];
  _captainOnBoard: boolean = false;

  fillShip(): void {
    let pirate = new Pirates();
    for (let i = 0; i < 113; i++) {
      this._listOfPirates.push(pirate);
    }
    const captain = new Pirates();
    captain._isCaptain = true;
    this._listOfPirates.push(captain);
    this._captainOnBoard = true;
  }

  printShip(): void {
    console.log(
      "This ship has a captain, who consumed " +
        this._listOfPirates[this._listOfPirates.length - 1].getIntoxication() +
        " rum and is " +
        this._listOfPirates[this._listOfPirates.length - 1].getStatus()
    );
  }

  private getNumberOfAlive(): number {
    let numberOfAlive: number = 0;
    for (let i = 0; i < this._listOfPirates.length; i++) {
      if (this._listOfPirates[i]._alive === true) numberOfAlive++;
    }
    return numberOfAlive;
  }

  randomDeaths(): void {
    for (
      let i = 0;
      i < this._listOfPirates.length;
      i + Math.floor(Math.random() * 10 - 1 + 1) + 1
    ) {
      this._listOfPirates[i]._alive = false;
    }
  }

  party(): void {
    for (let i = 0; i < this._listOfPirates.length; i++) {
      this._listOfPirates[i]._intoxicaton +
        Math.floor(Math.random() * 10 - 1 + 1) +
        1;
    }
  }

  battle(otherShip: Ship): boolean {
    if (
      this.getNumberOfAlive() +
        this._listOfPirates[this._listOfPirates.length - 1].getIntoxication() >
      otherShip.getNumberOfAlive() +
        otherShip._listOfPirates[
          otherShip._listOfPirates.length - 1
        ].getIntoxication()
    ) {
      otherShip.randomDeaths();
      this.party();
      return true;
    }
    return false;
  }
}
