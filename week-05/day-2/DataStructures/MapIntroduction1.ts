"use strict";
export {};
//create empty map witt key number and value string
let map: { [key: number]: string } = {};
//another solution
let map2: any = {};
//if map is empty or not
console.log(Object.keys(map).length == 0);
map[97] = "a";
map[98] = "b";
map[99] = "c";
map[65] = "A";
map[66] = "B";
map[67] = "C";
//print all keys
console.log(Object.keys(map));
//print all values
console.log(Object.values(map));
map[68] = "D";
//print how many keys-value is in map
console.log(Object.keys(map).length);
// Print the value that is associated with key 99
console.log(map[99]);
// Remove the key-value pair with key 97 and print the associated value
delete map[97];
console.log(map);
// Print whether there is an associated value with key 100 or not
if (map[100] === "" || map[100] === undefined) {
  console.log(false);
} else {
  console.log(true);
}
// another solution
// Print whether there is an associated value with key 100 or not
console.log(map.hasOwnProperty(100));
console.log(map);
// Remove all the key-value pairs
for (let k in map) {
  delete map[k];
}
// Print how many key-value pairs are in the map
console.log(Object.keys(map).length);
