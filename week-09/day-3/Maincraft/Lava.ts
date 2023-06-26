import { Block } from "./Block";

export class Lava extends Block {
  constructor() {
    super("lava", "yellow", 170, "Can not", [
      "mud",
      "brick",
      "glass",
      "ice",
      "air",
      "glowstone",
    ]);
  }

  canTransform(): boolean {
    return false;
  }

  transformation(lastBlockInWall: Block): boolean {
    if (lastBlockInWall._type === "mud") {
      lastBlockInWall._type = "brick";
      return true;
    } else if (lastBlockInWall._type === "ice") {
      lastBlockInWall._type = "air";
      return true;
    } else {
      return false;
    }
  }

  printTransformetion(): void {
    console.log(
      this._type + " has transformed a block of type mud or brick to ice or air"
    );
  }
}
