import { Block } from "./Block";

export class Glowstone extends Block {
  constructor() {
    super("glowstone", "white", 300, "Can not", [
      "glass",
      "ice",
      "air",
      "lava",
    ]);
  }

  transformation(lastBlockInWall: Block): boolean {
    if (lastBlockInWall._type === "glass") {
      lastBlockInWall._type = "gold";
      lastBlockInWall._lightTransmition = 160;
      return true;
    } else {
      return false;
    }
  }

  printTransformetion(): void {
    console.log(this._type + " has transformed a block of type glass to gold");
  }

  canTransform(): boolean {
    return true;
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
