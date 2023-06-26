export{}
let names: string[] = [];
console.log(names.length);
names.push("William");
//if array is empty
console.log(!names.length); 

//another solution if array is empty
function isEmpty(arr: string[]){
    if (arr.length == 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEmpty(names));

names.push("John");
names.push("Amanda");
console.log(names.length);
console.log(names[2]);

//iterate through array and print out each
let j: any;
for (j in names){
    console.log(names[j]);
}
//another solution to print out each
for (let n = 0; n < names.length; n++){
    console.log(names[n]);
}
//another solution
names.forEach(name => {
	console.log(name);
});

for(let n = 0; n < names.length; n++){
    console.log((n + 1) + ". " + names[n]);
}
//removes one element from array
//splice changes the array, not like replace method at Strings!!
names.splice(1, 1); 

//iterate trough and print reverse order
for (let n = names.length - 1; n >= 0; n--){
    console.log(names[n]);
}
names.splice(0);

console.log(names.length);