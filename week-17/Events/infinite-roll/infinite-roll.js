const body = document.querySelector("body")

function getColorCode() {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var count = 0; count < 6; count++) {
       code =code+ makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
 }

function divMaker(){
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getColorCode();
    return newDiv;
}

function beginning(){
    for(let i = 0; i < Math.floor(Math.random() * 100) + 10; i++){ 
    body.appendChild(divMaker());
}}

beginning();

const scrollThreshold = 300;

document.addEventListener("scroll", ()=>{
    if(window.pageYOffset > scrollThreshold) // how to get, when the user scroll to the end??? (window.pageYOffset behaves funny...)

    {
        for(let i =0; i < 10; i++){
            body.appendChild(divMaker());
        }
    }
});



