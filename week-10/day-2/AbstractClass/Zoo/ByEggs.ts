import { Animal } from "./Animal";
export abstract class ByEggs extends Animal {
  constructor(name: string, age: number, gender: string, color: string) {
    super(name, age, gender, color);
  }
  breed(): string {
    return "lying eggs.";
  }
}
