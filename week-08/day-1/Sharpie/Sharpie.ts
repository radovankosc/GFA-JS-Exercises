//Create a Sharpie class
// We should know the followings about each sharpie:
// color (which should be a string),
// width (which will be a number) and the
// inkAmount (another number)
// We need to specify the color and the width at creation
// Every sharpie is created with a default inkAmount value: 100
// We can use() the sharpie objects: using it decreases inkAmount by 10
export class Sharpie {
  _colour: string;
  _width: number;
  _inkAmount: number;
  constructor(colour: string, width: number, inkAmount: number) {
    this._colour = colour;
    this._width = width;
    this._inkAmount = inkAmount;
  }
  use() {
    this._inkAmount -= 10;
  }
}
