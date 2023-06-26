import { Flyable } from "../../InterFace/Flyable/I_Flyable";
import { ByEggs } from "./ByEggs";
export class Bird extends ByEggs implements Flyable {
  constructor(name: string) {
    super(name, 20, "male", "blue");
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
