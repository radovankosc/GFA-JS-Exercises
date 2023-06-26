export {};
let myObj: { [key: number]: string } = { 5: "Michael" };
myObj[3] = "Adela";

console.log(myObj);
console.log(Object.keys(myObj));
console.log(Object.values(myObj));
console.log(myObj.hasOwnProperty("Adela")); // returns true

delete myObj[1]; //deletes nothing, because key 1 does not exists
//delete myObj[3];

console.log(myObj);

//returns array of map(key:value pairs)
for (const [key, value] of Object.entries(myObj)) {
  console.log(key, value);
}

let myMap: { [key: number]: string } = {};
myMap[2] = "Adela";
myMap[4] = "Michal";
myMap[3] = "David";

for (let key in myMap) {
  if (myMap[key] === "Adela") {
    console.log("true");
  } else {
    console.log("false");
  }
}

console.log(myMap);

let mapicka = new Map();
mapicka.set(3, "dddd");
console.log(mapicka);

//Map
//is child from Object and has unique key/value pairs
//only one way how to crewte it:
//key can be any type
//maps remember order of insertation
const langObj = new Map();
langObj.set(1, "C#");
langObj.set(2, "JAVA");
console.log(langObj);
for (let keyvalue of langObj) {
  console.log(keyvalue);
}
//ITERATION:
//for OF loop
for (const keyvalue of langObj) {
  console.log(keyvalue);
}
console.log("\n");
//keys on map object
console.log(langObj.keys());
//values of map object
console.log(langObj.values());
//key keyvalues of ma object
console.log(langObj.entries());

//Object
//two was to create: using literal:
var obj = { 1: "C#", 2: "JAVA" };
//or constructor
const obj2 = new Object({ 1: "C#", 2: "JAVA" });
// objects doesnt remember order of insertation

for (let keyvalue of langObj) {
  console.log(keyvalue);
}
//"key" must be  string or symbol
//ITERATION
//for IN loop

console.log(Object.keys(obj));

//return an array of values
console.log(Object.values(obj));

////return an array of keys-values
console.log(Object.entries(obj));
////return an array of keys-values
console.log(Object.entries(obj));

console.log(obj);
