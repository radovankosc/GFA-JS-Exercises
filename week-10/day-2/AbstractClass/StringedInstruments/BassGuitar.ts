import { StringedInstruments } from "./StringedInstruments";
export class BassGuitar extends StringedInstruments {
  constructor(numberOfstrings: number = 4) {
    super("Bass Guitar", numberOfstrings);
  }
  sound(): string {
    return "Duum-duum-duum";
  }
}
