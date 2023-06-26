export{}
let products: {[key: string]: number} = {
    Milk: 1.07,
    Rice: 1.59,
    Eggs: 3.14,
    Cheese: 12.60,
    ChickenBreasts: 9.40,
    Apples: 2.31,
    Tomato: 2.58,
    Potato: 1.75,
    Onion: 1.10
}
let bobList: {[key: string]: number} = {
    Milk: 3,
    Rice: 2,
    Eggs: 2,
    Cheese: 1,
    ChickenBreasts: 4,
    Apples: 1,
    Tomato: 2,
    Potato:	1
}
let aliceList: {[key: string]: number} = {
    Rice: 1,
    Eggs: 5,
    ChickenBreasts: 2,
    Apples: 1,
    Tomato: 10
}
// How much does Bob pay?
let bobTotal: number = 0;
for (let bobGroceries in bobList ){
    if(bobGroceries in products){
        bobTotal += bobList[bobGroceries] * products[bobGroceries];
    }
}
console.log("Bob pays: " + bobTotal);

// How much does Alice pay?
let aliceTotal: number = 0;
for(let aliceGroceries in aliceList){
    if(aliceGroceries in products){
        aliceTotal += aliceList[aliceGroceries] * products[aliceGroceries];
    }
}
console.log("Alice pays: " + aliceTotal);
// Who buys more Rice?
if (aliceList["Rice"] > bobList["Rice"]){
    console.log("Alice has more Rice.")
}else{
    console.log("Bob has more Rice.")
}

//another solution with create function
function WhoBuysMore(product: string, name1: string, list1: any, name2: string, list2: any): any{
    let noOne = "Non of them";
    if(list1.hasOwnProperty(product) && list2.hasOwnProperty(product)){
        if(list1[product] > list2[product]){
            return name1;
        }else if(list1[product] == list2[product]){
            return noOne;        
        }else{
            return name2;
        }
    }else if (list1.hasOwnProperty(product)){
        return name1;
    }else if (list2.hasOwnProperty(product)){
        return name2;
    }else{
        return noOne;
    }
}
// Who buys more Rice?
console.log(WhoBuysMore("Rice", "Bob", bobList, "Alice", aliceList));
// Who buys more Potato?
console.log(WhoBuysMore("Potato", "Bob", bobList, "Alice", aliceList));
// Who buys more Ham?
console.log(WhoBuysMore("Ham", "Bob", bobList, "Alice", aliceList));
// Who buys more Apples?
console.log(WhoBuysMore("Apples", "Bob", bobList, "Alice", aliceList));

// Who buys more of different products?
if (Object.values(bobList) > Object.values(aliceList)){
    console.log("Bob has more different products.")
}else{
    console.log("Alice has more different products.")
}
// Who buys more items? (more pieces)
let bobsCost = Object.values(bobList).reduce((a, b) => (a+b));
let aliceCost = Object.values(aliceList).reduce((a, b) => (a+b));
if(bobsCost > aliceCost){
    console.log("Bob buys more items");
}else{
    console.log("Alice buys more items");
}