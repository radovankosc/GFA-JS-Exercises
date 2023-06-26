// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendA()` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendA(typo)`
export{}
var typo: string = "Chinchill";
function appendA(a: string): string {
    return a + "a";
}
console.log(appendA(typo));

//another solution
var typo: string = "Chinchill";
function appendA2(a: string): string {
    var appended = 4 + "a";
    return appended
}
console.log(appendA2(typo));

