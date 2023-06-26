import { Animal } from "./Animal";
export abstract class ByMiniature extends Animal {
  constructor(name: string, age: number, gender: string, color: string) {
    super(name, age, gender, color);
  }
  breed(): string {
    return "pushing miniature out.";
  }
}
