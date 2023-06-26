export {};
let productList: { [key: string]: number } = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};
// Which products cost less than 201? (just the name)
let productsUnder201: string[] = [];
for (const [key, value] of Object.entries(productList)) {
  if (value < 201) {
    productsUnder201.push(key);
  }
}
console.log(productsUnder201);

// Which products cost more than 150? (name + price)
//wORK WITH OBJECT
for (const [key, value] of Object.entries(productList)) {
  if (value > 150) {
    console.log(key, value);
  }
}

//WORK WITH ARRAY OF ARRAY
//create arra arraí// { [key: string]: number } to [[key, string],[key,string],...]
let arrayOfObject: [string, number][] = Object.entries(productList);
let arraAbove150: [string, number][] = [];
for (let i = 0; i < arrayOfObject.length; i++) {
  if (arrayOfObject[i][1] > 150) {
    arraAbove150.push(arrayOfObject[i]);
  }
}
for (let [element, price] of arraAbove150) {
  console.log(element, price);
}
