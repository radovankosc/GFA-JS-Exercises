const fbButt = document.querySelector("#fb");
const twitterButt = document.querySelector("#twitter");
const googleButt = document.querySelector("#google");
const submitButt = document.querySelector("#submit");
const myForm = document.forms[0];

fbButt.addEventListener("click", () => {
    window.location.href='https://facebook.com'
});

twitterButt.addEventListener("click", () => {
    window.location.href='https://twitter.com'
});

googleButt.addEventListener("click", () => {
    window.location.href='https://google.com'
});

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const errUsername = document.getElementById("err-username");
const errEmail = document.getElementById("err-email");
const errPassword = document.getElementById("err-password");
const errPassword2 = document.getElementById("err-password2");

myForm.addEventListener('submit', e => {
	e.preventDefault();
	if(validate()){ //if this function return true, send it to backend
		sendToBackend();
	}else{
		console.log("Data has not been validated, refresh page and try again!")//it co
	}	
    
});

function validate() {
	// trim to remove the whitespaces?? 
	const usernameValue = username.value;
	const emailValue = email.value;
	const passwordValue = password.value;
	const password2Value = password2.value;
	
	if(usernameValue === '') {//also required attribute in HTML <input>
		setErrorFor(errUsername, 'Username cannot be blank');
		return false;
	}
	
	if(emailValue === '') {//also required attribute in HTML <input>
		setErrorFor(errEmail, 'Email cannot be blank');
		return false;
	}
    if (!isEmail(emailValue)) {
		setErrorFor(errEmail, 'Not a valid email');
		return false;
	}	
	if(passwordValue === '') {//also required attribute in HTML <input>
		setErrorFor(errPassword, 'Password cannot be blank');
		return false;
	}	
	if(password2Value === '') {
		setErrorFor(errPassword2, 'Retyped password cannot be blank');
		return false;
	}
    if(passwordValue !== password2Value) {
		setErrorFor(errPassword2, 'Passwords does not match');
        setErrorFor(errPassword, 'Passwords does not match');
		return false;
	}
	return true;
}

function setErrorFor(errMesage, message) {
	errMesage.innerText = message;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function sendToBackend(){
    const data = {
		username: username.value,
		email: email.value,
		password: password.value
	};//create new object for storing data, to store data from input html to this OBJect?
   
    fetch("/post", {
        method: "POST",
        "headers" : {'Content-Type': 'application/json'},
        body: JSON.stringify(data), //convert data (object) to JSON format
      });
}






