export abstract class Vehicle {
  _type: string;
  _age: number;
  _hasWheels: boolean;
  constructor(type: string, age: number, hasWheels: boolean) {
    this._type = type;
    this._age = age;
    this._hasWheels = hasWheels;
  }
}
