import { Flower } from "./Flower";
import { Tree } from "./Tree";
export class Garden {
  _flowers: Flower[];
  _trees: Tree[];
  constructor(flowers: Flower[], trees: Tree[]) {
    this._flowers = flowers;
    this._trees = trees;
  }
  showGarden(): void {
    for (let flower of this._flowers) {
      if (flower._waterAmouth < 5) {
        console.log("The " + flower._color + " Flower needs water");
      } else {
        console.log("The " + flower._color + " Flower does not need water");
      }
    }
    for (let tree of this._trees) {
      if (tree._waterAmouth < 5) {
        console.log("The " + tree._color + " Tree needs water");
      } else {
        console.log("The " + tree._color + " Tree does not need water");
      }
    }
  }
  watering(waterNumber: number): void {
    console.log("\n" + "Watering with " + waterNumber);
    let dividedWaternumber =
      waterNumber / (this._flowers.length + this._trees.length);
    for (let flower of this._flowers) {
      if (flower._waterAmouth > 5) {
        continue;
      }
      flower._waterAmouth += (dividedWaternumber / 10) * 7.5;
    }
    for (let tree of this._trees) {
      if (tree._waterAmouth > 10) {
        tree._waterAmouth = tree._waterAmouth;
      }
      tree._waterAmouth += (dividedWaternumber / 10) * 4;
    }
  }
}
