let content = "Ahoj svete ahoj Adelo";

//occurences
let occurences2 = {};

// for( const word of content.toLowerCase().split(" ")){
//     if (occurences2[word]){
//         occurences2[word] += 1
//     }else{
//         occurences2[word] =1
//     }
// }
console.log(occurences2);

//filter()
console.log(content.split(" ").filter((word) => word == "Adelo"));

//join()
console.log(content.split(" ").join("  + "));

//map()
let array = [3, 5, 2];
array.map(Math.log);
console.log(array);
let mappedArray = array.map(Math.log);
console.log(mappedArray);

let myArry: string[] = ["a", "b", "c", "d", "e"];
console.log(myArry.slice(0, 3));
myArry.splice(1, 1, "rewrites");
console.log(myArry);
