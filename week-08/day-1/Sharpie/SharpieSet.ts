import { Sharpie } from "./Sharpie";
export class SharpieSet {
  _listOfSharpies: Sharpie[];
  constructor() {
    this._listOfSharpies = [];
  }

  add(sharpie: Sharpie) {
    this._listOfSharpies.push(sharpie);
  }

  countUsable(): number {
    let amountOfUsable: number = 0;
    for (let i = 0; i < this._listOfSharpies.length; i++) {
      if (this._listOfSharpies[i]._inkAmount > 0) {
        amountOfUsable++;
      }
    }
    return amountOfUsable;
  }

  removeTrash(): Sharpie[] {
    for (let i = 0; i < this._listOfSharpies.length; i++) {
      if ((this._listOfSharpies[i]._inkAmount = 0)) {
        this._listOfSharpies.splice(i, 1); //removes the sharpie from array _listOfSharpies on the index i (which is empty( if.. = 0))
        i--; //po kazde iteraci musim i zmensit o -1 jinak mi to preskočí 1 iteraci v dalším spustenem for loopu ...je to hack od Patrika :D
      }
    }
    return this._listOfSharpies;
  }
  //solution with creating new list of sharpies
  removeTrash2(): Sharpie[] {
    let sharpieWithInk: Sharpie[] = [];
    for (let i = 0; i < this._listOfSharpies.length; i++) {
      if (this._listOfSharpies[i]._inkAmount !== 0) {
        sharpieWithInk.push(this._listOfSharpies[i]); //add sharpie to array sharpieWithInk and returns it
      }
    }
    return sharpieWithInk;
  }

  trashIncludes(): Sharpie[] {
    let sharpieWithoutInk: Sharpie[] = [];
    for (let i = 0; i < this._listOfSharpies.length; i++) {
      if (this._listOfSharpies[i]._inkAmount == 0) {
        sharpieWithoutInk.push(this._listOfSharpies[i]);
      }
    }
    return sharpieWithoutInk;
  }
}
