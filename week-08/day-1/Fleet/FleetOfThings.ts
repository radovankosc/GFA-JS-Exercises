import { Thing } from "./Thing";
import { Fleet } from "./Fleet";

let fleet = new Fleet();
let thing1 = new Thing("Get milk");
let thing2 = new Thing("Remove the obstacles");
let thing3 = new Thing("Stand up");
let thing4 = new Thing("Eat lunch");

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those

//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch
fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);

fleet.getThings()[2].complete();
fleet.getThings()[3].complete();

console.log(fleet);

console.log(fleet.toString());
