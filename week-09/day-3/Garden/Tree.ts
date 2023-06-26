import { Flower } from "./Flower";
export class Tree extends Flower {
  constructor(color: string, waterAmouth: number) {
    super(color, waterAmouth);
  }
  getColor(): string {
    return this._color;
  }

  getWaterAmouth(): number {
    return this._waterAmouth;
  }
}
