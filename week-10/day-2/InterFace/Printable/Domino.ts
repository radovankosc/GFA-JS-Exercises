import { Printable } from "./Printable";

export class Domino implements Printable {
  _n1: number;
  _n2: number;
  constructor(n1: number, n2: number) {
    this._n1 = n1;
    this._n2 = n2;
  }
  printAllFields(): void {
    console.log("Domino A side: " + this._n1 + ", B side: " + this._n2);
  }
}
