
// -  Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// -  bonus for using the correct built in array method
export{}
var numbers = [4, 5, 6, 7];
numbers.forEach(function(numbers){
    console.log(numbers);
});
//another solution
for (var i=0; i<numbers.length; i++)
    console.log(i + ". " + numbers[i]);
//without indexes
for (var i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}
