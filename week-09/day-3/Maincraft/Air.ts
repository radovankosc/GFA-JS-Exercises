import { Block } from "./Block";

export class Air extends Block {
  constructor() {
    super("air", "transparent", 100, "Can", [
      "mud",
      "brick",
      "glass",
      "door",
      "window",
      "gold",
    ]);
  }

  canTransform(): boolean {
    return false;
  }
}
