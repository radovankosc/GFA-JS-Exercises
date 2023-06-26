export class Pirates {
  _intoxicaton: number = 0;
  _getDrinkSomeRum: number = 0;
  _alive: boolean = true;
  _isCaptain: boolean = false;
  drinkSomeRum() {
    if (this._alive === true) {
      this._intoxicaton++;
      this._getDrinkSomeRum++;
    }
    console.log("he's dead");
  }
  howsItGoingMate(): void {
    if (this._alive === true) {
      if (this._getDrinkSomeRum < 4) {
        console.log("Pour me anudder!");
      } else {
        this._intoxicaton = 0;
        console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
      }
    }
    console.log("he's dead");
  }

  brawl(pirate: Pirates): void {
    if (this._alive === true && pirate._alive === true) {
      let randomOption = Math.floor(Math.random() * 3 - 1 + 1) + 1;
      if (randomOption === 1) {
        this._alive = false;
      }
      if (randomOption === 2) {
        pirate._alive = false;
      }
      if (randomOption === 3) {
        pirate._alive = false;
        this._alive = false;
      }
    }
    console.log("he s dead");
  }

  die() {
    this._alive = false;
  }

  getIntoxication(): number {
    return this._intoxicaton;
  }

  getStatus(): string {
    if (this._alive === true) {
      return "is alive.";
    }
    return " is dead.";
  }
}
