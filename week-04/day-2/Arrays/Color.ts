export{}
// -  Create a two dimensional list
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`

let colors: any = [];
colors.unshift(["lime", "forest green", "olive", "pale green", "spring green"]); //add elements to beginning (0,0)
colors.splice(1, 0, ["orange red", "red", "tomato"]); //add elements to index 1 in row, starting from 0 in column
colors.push(["orchid", "violet", "pink", "hot pink"]); //add elements to the end (2,0)
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[2] [2]); //prints in x index 2, in y index 2
console.log(colors);