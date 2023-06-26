import { Pirate } from "./Pirate";
export class Ship {
  _listOfPirates: Pirate[];
  _captain: Pirate;
  constructor() {
    this._listOfPirates = [];
    this._captain = this._listOfPirates[0]; //captain is one of the pirates( index 0 in Pirates Array)
  }
  generatePirate() {
    let vitality: boolean = true; // variability of pirate alive or dead
    for (let i = 0; i < this._listOfPirates.length; i++) {
      if (this._listOfPirates[i]._pirateToxication < 15) {
        vitality = true;
      } else {
        vitality = false;
      }
    }
    this._listOfPirates.push(
      new Pirate(
        "Pirate" + Math.round(333 * Math.random()), //generates unique name of pirate by add random number
        Math.round(33 * Math.random()), //generates amouth of toxication (rums)
        vitality, // generates if the pirate is alive or dead( depens on an amouth of rums)
        Math.round(88 * Math.random()) //generates possibility to die
      )
    );
  }
  fillShip() {
    this._captain = new Pirate(
      "Captain" + Math.round(333 * Math.random()),
      Math.round(33 * Math.random()),
      true,
      Math.round(33 * Math.random())
    ); // captain is generated with random Name+number and random toxication
    this._listOfPirates.push(this._captain); // captain is added to list of Pirates at [0]
    for (let x = 0; x < 112; x++) {
      this.generatePirate();
    }
  }
  getLengthOfListOfALives() {
    //returns an length of array of alives in the Ship
    let listOfAlive: Pirate[] = [];
    for (let i = 0; i < this._listOfPirates.length; i++) {
      if (this._listOfPirates[i]._alive == true) {
        listOfAlive.push(this._listOfPirates[i]);
      }
    }
    return listOfAlive.length;
  }

  shipRepresentation() {
    console.log(
      "Ship with captain " +
        this._captain._pirateName +
        ", who is consumed: " +
        this._captain._pirateToxication +
        " rums, and with " +
        (this.getLengthOfListOfALives() - 1) + //because captain is not the part of a crew :D
        " alive pirates."
    );
  }
  battle(otherShip: Ship): boolean {
    if (
      this.getLengthOfListOfALives() - this._captain._pirateToxication >
      otherShip.getLengthOfListOfALives() - otherShip._captain._pirateToxication
    ) {
      //kills random of othership pirates = loser crew(expexted othership) has a random number of deaths
      for (
        let i = 0;
        i < otherShip._listOfPirates.length;
        i += Math.round(33 * Math.random())
      ) {
        otherShip._listOfPirates[i].die();
      }

      // winning captain (expected this) and crew has a party: everyone drinks a random number of rum
      for (let i = 0; i < this._listOfPirates.length; i++) {
        this._listOfPirates[i]._pirateToxication += Math.round(
          22 * Math.random()
        );
      }

      //method battle returns true if the battlecalling ship (expected this) wins
      return true;
    } else {
      //kills random of this pirates = loser crew(expexted this) has a random number of deaths
      for (
        let i = 0;
        i < this._listOfPirates.length;
        i += Math.round(33 * Math.random())
      ) {
        this._listOfPirates[i].die();
      }
      // winning captain(expecteh othership) and crew has a party: everyone drinks a random number of rum
      for (let i = 0; i < otherShip._listOfPirates.length; i++) {
        otherShip._listOfPirates[i]._pirateToxication += Math.round(
          22 * Math.random()
        );
      }
      return false;
    }
  }
}
