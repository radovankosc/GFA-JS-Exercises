import { Sharpie } from "./Sharpie";
import { SharpieSet } from "./SharpieSet";

let sharpie1 = new Sharpie("red", 50, 30);
//sharpie1.use();
//console.log(sharpie1);

let mySharpieSet: SharpieSet = new SharpieSet();
mySharpieSet.add(new Sharpie("red", 50, 10));
mySharpieSet.add(new Sharpie("blue", 40, 50));
mySharpieSet.add(new Sharpie("green", 40, 0));
mySharpieSet.add(new Sharpie("yellow", 30, 20));
mySharpieSet.add(new Sharpie("black", 10, 0));

console.log(mySharpieSet);
console.log(mySharpieSet.countUsable());
//console.log(mySharpieSet.trashIncludes());
console.log(mySharpieSet.removeTrash2());
