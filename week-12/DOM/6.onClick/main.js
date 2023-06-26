let myBody = document.querySelector("body");
let leftBox = document.createElement("select");
let rightBox = document.createElement("select");
let groupOfButtons = document.createElement("div");
const options = ["bread", "milk", "orange", "tomato"];
const buttonsOptions = ["Up", ">", "X", "Down"];

myBody.appendChild(leftBox);
for (let i = 0; i < options.length; i++) {
  let option = document.createElement("option");
  option.textContent = options[i];
  leftBox.appendChild(option);
}

myBody.appendChild(groupOfButtons);
for (let i = 0; i < 4; i++) {
  let button = document.createElement("button");
  button.textContent = buttonsOptions[i];
  groupOfButtons.appendChild(button);
}

myBody.appendChild(rightBox);
//functionality of buttons missing, comming back later when more experienced 