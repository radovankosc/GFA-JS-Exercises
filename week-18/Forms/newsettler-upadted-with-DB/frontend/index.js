const subscribeButton = document.getElementsByTagName("button")[0];
const container = document.querySelector("form");



subscribeButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(validate()){
        sendToBackend();
	}else{
        console.log("Data has not been validated, refresh page and try again!")
	}
});

function validate() {
    const nameInput = document.querySelector("#name"); 
    const emailInput = document.querySelector("#email"); 
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
	
	
	if(nameValue === '') {
        addSmallMessage("small-name");
		setErrorFor(errUsername, 'Username cannot be blank');
		return false;        
	}
	
	if(emailValue === '') {
        addSmallMessage("small-email");
		setErrorFor(errEmail, 'Email cannot be blank');
		return false;
	}
    if (!isEmail(emailValue)) {
		setErrorFor(errEmail, 'Not a valid email');
		return false;
	}
	return true;

    function setErrorFor(errMesage, message) {
        errMesage.innerText = message;
    }
    
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
}

function sendToBackend(){
    const nameInput = document.querySelector("#name"); 
    const emailInput = document.querySelector("#email"); 
    
    fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: `${nameInput.value}`, email: `${emailInput.value}` }),
    })
    .then((res) => res.text())//res is actually in json format (because of body: JSON.stringify), we want to parse it to text
    .then((res) => {
        container.innerHTML = res;//res is from backend and we want to print it
    })
    .catch((err) => console.log(err));
}

function addSmallMessage(smallId){
    let small = document.getElementById(smallId);
    small.removeAttribute("hidden");    
}