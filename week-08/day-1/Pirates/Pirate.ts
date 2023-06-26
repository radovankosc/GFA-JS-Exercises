export class Pirate {
  _pirateName: string;
  _pirateToxication: number;
  _alive: boolean;
  _deathPossibilityNumber: number; //must be 0-10
  constructor(
    name: string,
    toxication: number = 0,
    alive: boolean,
    deathPosibility: number
  ) {
    this._pirateName = name;
    this._pirateToxication = toxication;
    this._alive = alive;
    this._deathPossibilityNumber = deathPosibility;
  }

  //intoxicates the Pirate by one
  drinkSomeRum() {
    if (this._alive == true) {
      this._pirateToxication += 1; //because default toxication is 0
    } else {
      console.log("He is dead.");
    }
  }

  //when called, the Pirate replies
  howsItGoingMate() {
    if (this._alive == true) {
      if (this._pirateToxication < 4) {
        console.log("Pour me anudder!");
      } else {
        this._pirateToxication = 0; //set up toxication to 0
        console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
      }
    } else {
      console.log("He is dead.");
    }
  }

  //this kills off the pirate. When a pirate is dead, every method simply results in: he's dead
  die() {
    this._alive = false;
  }

  //where pirate fights another pirate (if both of them are alive)
  // there is 1/3 chance that this dies, the other dies or they both pass out
  brawl(pirate: Pirate) {
    //parameteter calls another pirate
    if (this._alive == true) {
      if (pirate._deathPossibilityNumber > this._deathPossibilityNumber) {
        pirate.die();
      } else if (
        pirate._deathPossibilityNumber == this._deathPossibilityNumber
      ) {
        pirate.die();
        this.die();
      } else {
        this.die();
      }
    } else {
      console.log("He is dead.");
    }
  }
}
