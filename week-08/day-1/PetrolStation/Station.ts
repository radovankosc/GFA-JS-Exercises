import { Car } from "./Car";
export class Station {
  _gasAmount: number;
  constructor(gasAmount: number) {
    this._gasAmount = gasAmount;
  }
  refill(car: Car) {
    this._gasAmount -= car._capacity;
    car._gasAmount += car._capacity;
  }
}
