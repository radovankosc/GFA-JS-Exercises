// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`
export{}
var names = ["Arthur", "Boe", "Chloe"];
var namesSwapped = names.reverse();
console.log(namesSwapped);

//another solution:
var temp = names[0] 
names[0] = names[2];
names[2] = temp;
console.log(names);

//another solution:
names.reverse();
console.log(names);

//another solution:
[names[0], names [2]] = [names [2], names[0]];
console.log(names);

