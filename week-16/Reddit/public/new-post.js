const myButton = document.querySelector("button");
const titleInput = document.querySelector("#title"); 
const urlInput = document.querySelector("#url");

myButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(validate()){ //if this function return true, send it to backend
		sendToDatabase();
	}else{
		alert("Not sent to database, your name or url missing!");
	}	
});

function validate(){
    if (urlInput.value === ""){
        return false;
    }
    if(titleInput.value === ""){
        titleInput.value = "anonym";//IS IT OVERRIDE VALUE SENT TO DB?
        return true;
    }
    alert("Sent to database!");
    return true;    
}

function sendToDatabase(){
    //these must be declared in fetch, otherwise not valuated
const title = document.querySelector("#title"); 
const url = document.querySelector("#url");
    fetch("/api/posts", {// endpoint created 
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: `${title.value}`, url: `${url.value}`, user_id: 3}),
    })
    .then(() => {
        window.location.href = "/";// I have an endpoint for "/" ready already
    })
    .catch((err) => console.log(err));
}    
    
