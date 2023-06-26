import { Block } from "./Block";

export class Door extends Block {
  _quality: number;
  _producer: string;
  constructor(
    quality: number,
    producer: string,
    color: string,
    lightTransmition: number

    //from window: can be crosses and ["mud","brick","air","door", "glowstone"]
  ) {
    super("door", color, lightTransmition, "Can be", [
      "mud",
      "brick",
      "air",
      "window",
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
