const subscribeButton = document.getElementsByTagName("button")[0];
const container = document.querySelector("form");



subscribeButton.addEventListener("click", (e) => {
    e.preventDefault();

    //these const must be in fetch
    const nameInput = document.querySelector("#name"); 
    const emailInput = document.querySelector("#email"); 
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    
    fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: `${nameValue}`, email: `${emailValue}` }),
    })
    .then((res) => res.text())//res is actually in json format (because of body: JSON.stringify), we want to parse it to text
    .then((res) => {
        container.innerHTML = res;
    })
    .catch((err) => console.log(err));
});
