import { Aircraft } from "./Aircrafts";
import { Carrier } from "./Carrier";
let plane1 = new Aircraft("F35", 12, 50);
let plane2 = new Aircraft("F35", 12, 50);
let plane3 = new Aircraft("F35", 12, 50);
let plane4 = new Aircraft("F16", 8, 30);
let plane5 = new Aircraft("F16", 8, 30);

let plane6 = new Aircraft("F35", 12, 50);
let plane7 = new Aircraft("F35", 12, 50);
let plane8 = new Aircraft("F35", 12, 50);
let plane9 = new Aircraft("F16", 8, 30);
let plane10 = new Aircraft("F16", 8, 30);

let carrier1 = new Carrier(105, 5000);
carrier1.add(plane1);
carrier1.add(plane2);
carrier1.add(plane3);
carrier1.add(plane4);
carrier1.add(plane5);

let carrier2 = new Carrier(200, 5000);
carrier2.add(plane6);
carrier2.add(plane7);
carrier2.add(plane8);
carrier2.add(plane9);
carrier2.add(plane10);

console.log(
  "-------------------------------------------------" +
    "\n" +
    "Originaly created:"
);
carrier1.getStatus();
carrier2.getStatus();

console.log(
  "-------------------------------------------------" +
    "\n" +
    "After both carriers filled:"
);
carrier1.fill();
carrier2.fill();
carrier1.getStatus();
carrier2.getStatus();

console.log(
  "-------------------------------------------------" +
    "\n" +
    "After carriers1 fighted carrier2"
);
carrier1.fight(carrier2);
carrier1.getStatus();
carrier2.getStatus();

console.log(
  "-------------------------------------------------" +
    "\n" +
    "After carrier1 filled again:"
);
carrier1.fill();
carrier1.getStatus();
carrier2.getStatus();
