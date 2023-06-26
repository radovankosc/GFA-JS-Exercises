import { Block } from "./Block";

export class Gold extends Block {
  constructor(lightTransmition: number) {
    super("gold", "rgb: 255,215,0", lightTransmition, "Can not", [
      "glowstone",
      "glass",
    ]);
  }

  canTransform(): boolean {
    return false;
  }
}
