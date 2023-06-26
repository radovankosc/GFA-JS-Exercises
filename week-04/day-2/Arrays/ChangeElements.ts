// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test
export{}
var numbers = [1, 2, 3, 8, 5, 6];
numbers.map(function(){// returns the mapping element
    numbers[3] = 4;
}
)
console.log(numbers);
console.log(numbers[3]);

//another solution with forEach
numbers.forEach(function(){
    numbers[3] = 4;
}
)
console.log(numbers);
console.log(numbers[3]);
