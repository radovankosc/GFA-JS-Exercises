import { Block } from "./Block";

export class Glass extends Block {
  constructor(lightTransmition: number = 99, color: string = "transparent") {
    super("glass", color, lightTransmition, "Can not", [
      "mud",
      "brick",
      "ice",
      "air",
      "glowstone",
      "door",
    ]);
  }

  canTransform(): boolean {
    return false;
  }
}
