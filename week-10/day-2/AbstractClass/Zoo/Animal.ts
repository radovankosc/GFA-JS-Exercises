export abstract class Animal {
  _name: string;
  _age: number;
  _gender: string;
  _color: string;
  constructor(name: string, age: number, gender: string, color: string) {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._color = color;
  }
  colorise(): string {
    return "dark " + this._color;
  }

  getName(): string {
    return this._name;
  }

  abstract breed(): string;
}
