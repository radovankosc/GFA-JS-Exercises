import { Block } from "./Block";

export class Brick extends Block {
  constructor(color: string = "rgb: 144, 76, 42") {
    super("brick", "transparent", 0, "Can not", [
      "mud",
      "glass",
      "air",
      "door",
      "window",
    ]);
  }

  canTransform(): boolean {
    return false;
  }
}
