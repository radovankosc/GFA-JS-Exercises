import { ByEggs } from "./ByEggs";
export class Reptile extends ByEggs {
  _numberOfLimbs: number;
  constructor(name: string) {
    super(name, 10, "female", "yellow");
    this._numberOfLimbs = 0;
  }
}
