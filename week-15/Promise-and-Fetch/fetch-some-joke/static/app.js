"use strict";

const { response } = require("express");
const { json } = require("stream/consumers");

// Create a web application with a <div> container and a <button>.
// The button should start a fetch-based request.
// You can use this API.
// Store the result in your container.
// Handle your promise's rejected status also (show some error message).
// You can implement more awesome design than the example 😃

let myButton = document.querySelector("button");

function addJoke(){
    let mainDiv = document.querySelector(".main-container");
    const jokeDiv = document.createElement("div");
    jokeDiv.classList.add("joke-div"); //adding class named joke-div to element div
    mainDiv.appendChild(jokeDiv);
    
    fetch("https://icanhazdadjoke.com/", {headers: {"Accept": "application/json"}})
    .then((response) => {
        return response.json();
    })
    
    .then((myJoke) => { jokeDiv.innerText = myJoke.joke ;})
    
    
    .catch((error) => {
        console.log(error);
        console.log("Error occurrs!");
    })
}

//does not work, added attribute in file.html to HTML element button >> onclick
// myButton.addEventListener('click', () => { addJoke()});
