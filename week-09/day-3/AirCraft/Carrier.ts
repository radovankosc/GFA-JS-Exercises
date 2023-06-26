import { Aircraft } from "./Aircrafts";
export class Carrier {
  _arrOfAircraft: Aircraft[];
  _storeOfAmmo: number;
  _hP: number;
  constructor(
    storeOfAmmo: number,
    hP: number //The initial ammo should be given as a constructor parameter
  ) {
    this._arrOfAircraft = [];
    this._storeOfAmmo = storeOfAmmo; //The initial ammo should be given as a constructor parameter
    this._hP = hP;
  }

  totalDamage(): number {
    let totalDamage = 0;
    for (let plane of this._arrOfAircraft) {
      totalDamage += plane._allDamage;
    }
    return totalDamage;
  }

  add(plane: Aircraft) {
    this._arrOfAircraft.push(plane);
  }

  sortArr(): Aircraft[] {
    let sortedArray: Aircraft[] = [];
    for (let plane of this._arrOfAircraft) {
      if (plane.isPriority()) {
        sortedArray.unshift(plane);
      } else {
        sortedArray.push(plane);
      }
    }
    return sortedArray;
  }

  fill() {
    if (this._storeOfAmmo === 0) {
      throw "Not enought Ammo!";
    }
    for (let plane of this.sortArr()) {
      this._storeOfAmmo = plane.refillAmmo(this._storeOfAmmo);
    }
  }

  fight(carrier: Carrier) {
    let damage: number = 0;
    for (let plane of carrier._arrOfAircraft) {
      damage += plane.fight();
    }
    for (let plane of this._arrOfAircraft) {
      plane._ammo = 0;
    }
    carrier._hP -= damage;
  }

  printAircraft(): string {
    let logText: string = "";
    for (let plane of this._arrOfAircraft) {
      logText += plane.getStatus();
    }
    return logText;
  }

  getStatus() {
    if (this._hP > 1) {
      console.log(
        "HP: " +
          this._hP +
          ", Aircraft count: " +
          this._arrOfAircraft.length +
          ", Ammo Storage: " +
          this._storeOfAmmo +
          ", Total damage: " +
          this.totalDamage() +
          "\n" +
          "Aircrafts:" +
          "\n" +
          this.printAircraft()
      );
    } else {
      console.log("It's dead Jim :(");
    }
  }
}
