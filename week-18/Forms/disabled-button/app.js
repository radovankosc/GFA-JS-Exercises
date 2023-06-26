const buttonSign = document.getElementById("sign");
const buttonLoveCats = document.querySelector("#love_cat");

const petDiv = document.querySelector("#pet");
const catFactsDiv = document.querySelector("#cat_facts");

let isVIP = false;//if you check Victor

//div can also have EventListener
petDiv.addEventListener("click", () =>{
    const answer = (document.querySelector('input[name="responce_for_pet"]:checked')).value;
    if(answer === "cat" || answer === "dog" ){
    buttonSign.removeAttribute("disabled"); 
    }else if(answer === "fish"){
        buttonSign.removeAttribute("disabled");
        isVIP = true;
        }
})

catFactsDiv.addEventListener("click",() =>{
    const answer = (document.querySelector('input[name="responce_for_cat_fact"]:checked')).value;
    if(answer === "yes"){
    buttonLoveCats.removeAttribute("disabled")
    }else if(isVIP === true && answer === "no"){
        buttonLoveCats.setAttribute("disabled")
    }
})

buttonLoveCats.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Thank you, you've successfully signed up for cat facts");
})

buttonSign.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Sigh, we still added you to the cat facts list");
})