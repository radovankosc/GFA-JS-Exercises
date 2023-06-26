// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.
const king: HTMLElement = document.getElementById("b325");
console.log("king", king);

// 2. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
// console.log each of them.
const businesLamp: HTMLCollectionOf<Element> =
  document.getElementsByClassName("big");
console.log(businesLamp);
//it returns HTML Collection ↑ , it is not array where i can iterate, it is string
//another solution:
const businessLamp2: NodeList = document.querySelectorAll(".big");
for (const node of businessLamp2) {
  console.log("businessLamp2", node.textContent);
}

// 3. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.
const conceitedKing: NodeList = document.querySelectorAll(".container > div");
for (const node of conceitedKing) {
  alert(node.textContent);
}

// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.
const noBusiness: Node[] = [...conceitedKing];
let lampier = document.querySelector("p");
noBusiness.push(lampier);
for (const node of noBusiness) {
  console.log(node.textContent);
}
