// Create a BattleApp class, where you can fight with ships
// Create 2 ships, fill them with pirates
// Have a battle!
import { Ship } from "./Ship";
class BattleApp {
  _ship1: Ship;
  _ship2: Ship;
  constructor() {
    this._ship1 = new Ship();
    this._ship2 = new Ship();
  }
  fillShips() {
    this._ship1.fillShip();
    this._ship2.fillShip();
  }
  haveBattle() {
    let battleResult: boolean = this._ship1.battle(this._ship2);
    if (battleResult) {
      console.log("Ship 1 won! ");
    } else {
      console.log("Ship 2 won! ");
    }
  }
}
let app = new BattleApp();
app.fillShips();
console.log(app._ship1._captain._pirateToxication);
console.log(app._ship2._captain._pirateToxication);
app.haveBattle();
console.log(app._ship1._captain._pirateToxication);
console.log(app._ship2._captain._pirateToxication);
