export class Flower {
  _color: string;
  _waterAmouth: number;
  constructor(color: string, waterAmouth: number) {
    this._color = color;
    this._waterAmouth = waterAmouth;
  }
  getColor(): string {
    return this._color;
  }

  getWaterAmouth(): number {
    return this._waterAmouth;
  }
}
