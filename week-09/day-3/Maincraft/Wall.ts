import { Block } from "./Block";

export class Wall {
  _listOfBlock: Block[];
  constructor(listOfBlock: [] = []) {
    this._listOfBlock = listOfBlock;
  }

  placeBlock(block: Block) {
    let lastElement = this._listOfBlock[this._listOfBlock.length - 1];
    if (
      lastElement?.canPlaceAfter(block) == true ||
      this._listOfBlock.length == 0
    ) {
      this._listOfBlock.push(block);
    }

    if (block.canTransform() == true) {
      if (block.transformation(lastElement)) {
        block.printTransformetion();
      }
    }
  }

  printStatus(): void {
    console.log("Light transmitted: " + this.calculateLightTransmission());
    for (let i = 0; i < this._listOfBlock.length; i++) {
      console.log(this._listOfBlock[i].printStatus());
    }
  }

  calculateLightTransmission(): number {
    let sumOfLight: number = 0;
    for (let i = 0; i < this._listOfBlock.length; i++) {
      sumOfLight += this._listOfBlock[i]._lightTransmition;
    }
    return Math.round(sumOfLight / this._listOfBlock.length);
  }
}
