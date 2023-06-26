import { Instrument } from "./Instrument";
export abstract class StringedInstruments extends Instrument {
  _numberOfStrings: number;

  constructor(name: string, numberOfstrings: number) {
    super(name);
    this._numberOfStrings = numberOfstrings;
  }
  abstract sound(): string; //predict Fututre ( in subclass we are able to change sounds), and we can call this method in this class (not depends what it does in subclasses)
  play(): void {
    //does it really ovarrides play() or I create new method?
    console.log(
      this._name +
        ", a " +
        this._numberOfStrings +
        "-stringed instrument that goes " +
        this.sound()
    );
  }
}
