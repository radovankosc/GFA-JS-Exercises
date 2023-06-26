import { Station } from "./Station";
export class Car {
  _gasAmount: number;
  _capacity: number;
  constructor(gasAmount: number = 0, capacity: number = 100) {
    this._gasAmount = gasAmount;
    this._capacity = capacity;
  }
}
