import { Block } from "./Block";

export class Window extends Block {
  _quality: number;
  _producer: string;
  constructor(
    quality: number,
    producer: string,
    color: string,
    lightTransmition: number,
    crossed: string
  ) {
    super("window", color, lightTransmition, crossed, [
      "mud",
      "brick",
      "air",
      "door",
      "glowstone",
    ]);
    this._quality = quality;
    this._producer = producer;
  }

  canTransform(): boolean {
    return false;
  }

  printStatus(): string {
    return (
      "Block of type: " +
      this._type +
      "\nHas light transmission: " +
      this._lightTransmition +
      "\n" +
      this._crossed +
      " be crossed." +
      "\nManufactured by " +
      this._producer +
      " on quality level " +
      this._quality
    );
  }
}
