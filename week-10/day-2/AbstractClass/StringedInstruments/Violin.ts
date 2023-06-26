import { StringedInstruments } from "./StringedInstruments";
export class Violin extends StringedInstruments {
  constructor(numberOfstrings: number = 4) {
    super("Violin", numberOfstrings);
  }
  sound(): string {
    return "Duum-duum-duum";
  }
}
