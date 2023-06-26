import { Block } from "./Block";

export class Ice extends Block {
  constructor() {
    super("ice", "transparent", 97, "Can not", [
      "mud",
      "brick",
      "glass",
      "lava",
      "air",
      "glowstone",
    ]);
  }

  canTransform(): boolean {
    return false;
  }

  transformation(lastBlockInWall: Block): boolean {
    if (lastBlockInWall._type === "lava") {
      lastBlockInWall._type = "glass";
      lastBlockInWall._lightTransmition = 160;
      return true;
    } else {
      return false;
    }
  }

  printTransformetion(): void {
    console.log(this._type + " has transformed a block of type lava to glass");
  }

  printStatus(): string {
    return (
      "Block of type: " +
      this._type +
      "\nHas light transmission: " +
      this._lightTransmition +
      "\n" +
      this._crossed +
      " be crossed."
    );
  }
}
