let array = ["asdd","gggdddssaa"];
const lettersArray = array.map(str => str.split(''));
// [["a", "b", "r", "a", "c", "a", "d", "a", "b", "r", "a"],["a", "l", "o", "t", "e"]]

let arr = [4,5,2,2];
let sortedArrASC = arr.sort((a,b)=>a-b);
//[2, 2, 4, 5]

let string = "matej";
let reversed = string.split("").reverse().toString().replace(/,/gi,"");
console.log(reversed);

let s = "aabcdddd";
let str = s.split(""); 
for (let i = 0; i < s.length; i+=2){
console.log(str[i],str[i+1]);
}