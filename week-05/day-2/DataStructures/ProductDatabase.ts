export {};
let productList: { [key: string]: number } = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};
// How much is the fish?
console.log(productList["Fish"]);

//Most expensive?
function mostExpensiveProduct(database: { [key: string]: number }): string[] {
  let arrPrice: number[] = Object.values(productList); //create array of prices
  let mostExpensivePrice: number = Math.max(...arrPrice); //finds max value of that array
  let mostExpensiveProduct: string[] = []; //final array of the most expensive key with value
  for (let [productName, productPrice] of Object.entries(database)) {
    if (productPrice === mostExpensivePrice) {
      mostExpensiveProduct.push(productName);
    }
  }
  return mostExpensiveProduct;
}
console.log("Most expensive product is: " + mostExpensiveProduct(productList));
//prints just value of array into output
for (const [key, value] of Object.entries(mostExpensiveProduct(productList))) {
  console.log(value);
}

// What is the average price?
let average = (
  Object.values(productList).reduce((a, b) => a + b) /
  Object.keys(productList).length
).toFixed(5);
console.log(average);

//another solution with for loop
let arrofPrices = Object.values(productList);
let sum: number = 0;
for (let values in arrofPrices) {
  sum += arrofPrices[values];
}
let average2 = (sum / Object.keys(productList).length).toFixed(5);
console.log(average2);

// How many products' price is below 300?
let productUnder300 = []; // empty array
for (let [product, price] of Object.entries(productList)) {
  if (price < 300) {
    productUnder300.push(product); //push these results under 300 to this array
  }
}
console.log(productUnder300);

// Is there anything we can buy for exactly 125?
if (productList.hasOwnProperty(125)) {
  console.log("yes");
} else {
  console.log("no");
}

//another solution with what we can and cannot buy
let productFor125 = [];
for (let [product, price] of Object.entries(productList)) {
  if (price == 125) {
    productFor125.push(product);
    console.log("You can buy: " + productFor125);
  } else {
    console.log("You can not buy: " + product);
  }
}

// What is the cheapest product?
function cheapest(database: any): string[] {
  let arrPrice: number[] = Object.values(database); //create array of prices
  let cheapestPrice: number = Math.min(...arrPrice); //finds min value of that array
  let cheapestProduct: string[] = []; //final array of the cheapest key with value
  for (let [productName, productPrice] of Object.entries(database)) {
    if (productPrice === cheapestPrice) {
      cheapestProduct.push(productName);
    }
  }
  return cheapestProduct;
}
console.log("Cheapest is: " + cheapest(productList));

//prints just value of array into output
for (const [key, value] of Object.entries(cheapest(productList))) {
  console.log(value);
}

let object = { b: 2, c: 3 };

let arrayFromObject = Object.entries(object);

console.log(arrayFromObject[0][1]);
