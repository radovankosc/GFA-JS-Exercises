import { Pirate } from "./Pirate";
import { Ship } from "./Ship";
let pirate1 = new Pirate("Morgan", 0, true, 2);
let pirate2 = new Pirate("Daniel", 0, true, 3);
let parrot = new Pirate("LuckyPlume", 0, true, 6);

let ship1 = new Ship();
ship1.fillShip(); // ship has already have 113 pirates, so it returns it is full
console.log(ship1);
// console.log(ship1._listOfPirates[0]); //pirat = první index objektu ship1 třídy Ship = captain
console.log(ship1._captain);
console.log(ship1.shipRepresentation());

let ship2 = new Ship();
ship2.fillShip();
console.log(ship2);
console.log(ship2._captain);
console.log(ship2.shipRepresentation());
