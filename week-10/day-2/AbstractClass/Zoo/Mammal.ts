import { ByMiniature } from "./ByMiniature";
export class Mammal extends ByMiniature {
  _numberOfPotentionalChildrens: number;

  constructor(name: string) {
    super(name, 5, "female", "red");
    this._numberOfPotentionalChildrens = 5;
  }

  run(): string {
    return "has 4 limbs so it can run!";
  }
}
