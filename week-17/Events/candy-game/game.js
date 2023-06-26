// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.

// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x
const createCandy = document.querySelector(".create-candies");
const buyLollypops = document.querySelector(".buy-lollypops");
const makeRain = document.querySelector(".candy-machine");

let candiesCounter = 0;
const candies = document.querySelector(".candies");

let lollypopsCounter = 1000;
const lollypops = document.querySelector(".lollypops");

let speedCounter = 0;
const generatorSpeed = document.querySelector(".speed");


createCandy.addEventListener("click", () => {
    candiesCounter ++;
    candies.textContent = candiesCounter;
});

buyLollypops.addEventListener("click", () => {
    if(candiesCounter < 100){
        alert("Not enough candies, yet!");
    }
    else{
        lollypopsCounter ++;
        lollypops.textContent = ""; //anullise output first
        candiesCounter = candiesCounter - 100;
        candies.textContent = candiesCounter;
        
        for(let i = 1; i < lollypopsCounter; i++){
            lollypops.textContent += "🍭";     
        } 
    }   
});

//generator candies per sec

let generateQuote = Math.round(lollypopsCounter/10);

let timerId = null; //timer on backgrond, when i execute parametrizedSetInterval()

function parametrizedSetInterval(speed){
    timerId = setInterval(()=> {
        if(candiesCounter >= 10000){
            alert("You gather 10 000 candies! Quest completed!")
        }else{

        candiesCounter += speed;
        candies.textContent = candiesCounter;
        generatorSpeed.textContent = speed;
   } },1000)
} 

if(lollypopsCounter >= 10)
parametrizedSetInterval(generateQuote);

makeRain.addEventListener("click", () => {
    generateQuote *= 10;
    clearInterval(timerId); //I have to clearInterval running on background (timer that counting 1candy per hour for every 10 lollypops)
    parametrizedSetInterval(generateQuote);
    makeRain.setAttribute("disabled", "");
});








