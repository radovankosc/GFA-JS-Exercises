// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`
export{}
var numbers = [3, 4, 5, 6, 7];
numbers.reverse();
console.log(numbers);

//with loop and tempArray
var numbers2: any = [3, 4, 5, 6, 7];
var tempArray: number[] = [];
for (let i = numbers2 - 1; i < -1; i-- ){
    tempArray.push(numbers2);
}
console.log(numbers2);

