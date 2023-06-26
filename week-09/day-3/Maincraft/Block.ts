import { BlobOptions } from "buffer";
import { Wall } from "./Wall";
export abstract class Block {
  _type: string;
  _color: string;
  _lightTransmition: number;
  _crossed: string;
  _adjacencyList: string[];
  constructor(
    type: string,
    color: string,
    lightTransmition: number,
    crossed: string,
    adjacencyList: string[]
  ) {
    this._type = type;
    this._color = color;
    this._lightTransmition = lightTransmition;
    this._crossed = crossed;
    this._adjacencyList = adjacencyList;
  }

  canPlaceAfter(block: Block): boolean {
    for (let i = 0; i < this._adjacencyList.length; i++)
      if (this._adjacencyList[i] == block._type) {
        return true;
      }
    return false;
  }

  getTransmition(): number {
    return this._lightTransmition / 100;
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

  printTransformetion(): void {}

  abstract canTransform(): boolean;

  transformation(block?: Block): boolean {
    return false;
  }
}
