export {};
let map: { [key: string]: string } = {
  "978-1-60309-452-8": "A Letter to Jo",
  "978-1-60309-459-7": "Lupus",
  "978-1-60309-444-3": "Red Panda and Moon Bear",
  "978-1-60309-461-0": "The Lab",
};
//Print all the key-value pairs in the following format
for (const [key, value] of Object.entries(map)) {
  console.log(key, value);
}
// Remove the key-value pair with key 978-1-60309-444-3
delete map["978-1-60309-444-3"];

// Remove the key-value pair with value The Lab
for (const [key, value] of Object.entries(map)) {
  if (value === "The Lab") {
    delete map.key;
  }
}
// Add the following key-value pairs to the map
map = {
  ...map,
  "978-1-60309-450-4": "They Called Us Enemy",
  "978-1-60309-453-5": "Why Did We Trust Him?",
};
//another solution
map["978-1-60309-450-4"] = "They Called Us Enemy";
map["978-1-60309-453-5"] = "Why Did We Trust Him?";

//Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(Object.hasOwnProperty("478-0-61159-424-8"));
//Another solution
console.log(Object.keys(map).includes("478-0-61159-424-8"));
// Print the value associated with key 978-1-60309-453-5
console.log(map["978-1-60309-453-5"]);
