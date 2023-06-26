// - Create an array variable named `drinks` with the following content:
//   `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of
//   a loop
// - It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
export{}
var drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];
var doubled = drinks.map(function(element){
    return element + element
});
console.log(doubled);