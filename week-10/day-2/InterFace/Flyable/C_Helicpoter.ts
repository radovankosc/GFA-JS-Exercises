import { Vehicle } from "./AC_Vehicle";
import { Flyable } from "./I_Flyable";
export class Helicopter extends Vehicle implements Flyable {
  constructor(name: string, age: number, hasWheel: boolean) {
    super(name, age, hasWheel);
  }
  land(): string {
    return "I am landing";
  }
  fly(): string {
    return "I can fly";
  }
  takeOff(): string {
    return "I take Off";
  }
}
