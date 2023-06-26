import { StringedInstruments } from "./StringedInstruments";
export class ElectricGuitar extends StringedInstruments {
  constructor(numberOfstrings: number = 6) {
    super("Electric Guitar", numberOfstrings);
  }
  sound(): string {
    return "Twang";
  }
}
