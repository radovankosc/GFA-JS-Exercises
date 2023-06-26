export{}
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse(string: string): string{
    let str = string.split("").reverse().toString().replace(/,/gi, "");            
    return str;
}
console.log(reverse(toBeReversed));

export = reverse;