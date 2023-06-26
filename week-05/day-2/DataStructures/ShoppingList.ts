export{}
let shoppingList = ["eggs" , "milk", "fish", "apples", "bread", "chicken"];
if(shoppingList.indexOf("milk") >= 0){
    console.log("yes")
}else{
    console.log("no")
}
if(shoppingList.indexOf("bananas") >= 0){
    console.log("yes")
}else{
    console.log("no")
}
//another solution 
if(shoppingList.includes("milk")){
    console.log("yes");
}else{
    console.log("no");
}
