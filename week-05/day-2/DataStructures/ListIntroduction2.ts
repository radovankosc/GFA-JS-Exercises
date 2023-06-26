//Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
// Create a new list ('List B') with the values of List A

let ListA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
let ListB = [...ListA];
// Print out whether List A contains "Durian" or not
console.log(ListA.includes("Durian"));
// Remove "Durian" from List B
ListB.splice(3, 1);
// Add "Kiwifruit" to List A after the 4th element
ListA.splice(4, 0, "Kiwifruit");
// Compare the size of List A and List B
console.log(ListA.length === ListB.length);
// Get the index of "Avocado" from List A
console.log(ListB.indexOf("Avocado"));
console.log(ListB.indexOf("Durian"));
// Add "Passion Fruit" and "Pomelo" to List B in a single statement
ListB = [...ListB, "Passion Fruit", "Pomelo"];
console.log(ListB);
//anotjer solution
ListB.push("Passion Fruit", "Pomelo");
// Print out the 3rd element from List A
console.log(ListA[2]);
// Print all elements of List A
// Print all elements of List B
console.log(ListA);
console.log(ListB);

ListA.forEach(function (element) {
  console.log(element);
});

for (let element in ListA) {
  console.log(element);
  console.log(ListA[element]);
}
