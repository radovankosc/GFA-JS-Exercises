import { Block } from "./Block";

export class Mud extends Block {
  constructor() {
    super("mud", "dark gray", 0, "Can not", [
      "brick",
      "air",
      "lava",
      "door",
      "window",
      "gold",
    ]);
  }

  canTransform(): boolean {
    return false;
  }
}
