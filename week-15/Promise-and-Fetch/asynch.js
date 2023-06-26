/*
  If you want to try this file you have to add in package.json to the root object:
  {
    "type": "module"
  }
  without this it won't work
*/
import fetch from 'node-fetch';
import { Headers } from 'node-fetch';
import { XMLHttpRequest } from 'xmlhttprequest';
import fs from 'fs';

//------------------------WITH CALLBACK---------------------------------------------
function getSomething(url, callback) {
    const xhttp = new XMLHttpRequest();//to use something from internet
    xhttp.addEventListener('readystatechange', () => {//we rise this event if readystatechange
        if(xhttp.readyState === 4 && xhttp.status === 200){//readyState property has 5 opitopns(index 4 = done), status of http response
            let result = xhttp.responseText;//http response in text format
            callback(undefined, result);
        } else if(xhttp.readyState === 4) {
            callback("not found", undefined);
        }
    })
    xhttp.open("GET", url);//open url
    xhttp.send();//send request
}

//call above function
getSomething("http://x.com/", (err, data)=>{//specify callback(hac 2 parameters: error, data)
    console.log(err);
    console.log(data);
    getSomething("http://x.com/", (err, data)=>{
        console.log(err);
        console.log(data);
        getSomething("http://xhjasdsadasdhg.com/", (err, data)=>{
            console.log(err);
            console.log(data);
        })
    })
}) 

//------------------------WITH PROMISE---------------------------------------------

function get(url){//we do not need callbac, because we return promise
    return new Promise(function(resolve, reject){//executer function with parameters RESOLVE, REJECT are callback functions
//resolve will be callback function if we  have a success request
//reject will be callback fce what to do if we  will not sucseed( for ex 404 status)     
        const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url);//opEn url
    xhttp.onload = function(){
      if(xhttp.status >= 200 && xhttp.status < 300){// filter functionality up on status code
        console.log("successfull");
        let result = xhttp.responseText;
        resolve(result);//in callback above are 2 parameters, but we do not specify error as parmeter
      } else {
        reject(xhttp.responseText);//prints why the promise has been rejecte, we have got some responcebut not with required response code 
      }
    }

    //if we do nto get anything back (status, text), we will call reject again
    //can access the error part on the xhtttp variable by oneerror property, pass here function in cSE OF ONLOAD
    xhttp.onerror = function(){
      reject(xhttp.status);
    }
    xhttp.send();
  })
}

//call this function above
const promise = get("http://x.com/");//we will get back promise (which is pending), so store into variable 
promise.then((response)=>{//on promise are functions()
//if we want a result, we have to call .then(), we will bale to provide functions responce and reject
//1th OPTION:.then() means resolve
//2nd OPTION:.catch() means reject(after the promise obj)
//3rd OPTION:.finally() means after all then and catch part, we want to call the finaliser
//finally- usualy for restore whole website

  console.log("first request");
  console.log(response);
  return get("http://x.com/");//i will get result object (new promise object), so I can call another .than() on it
}).then((response)=>{  
  console.log("second request");
  console.log(response);
  return get("http://x.com/");
}).then((response) => {
  console.log("third request");
  console.log(response);
}).catch((reason) => {//specify reject part
//reason is parameter, functionality: 
  console.log("Error catched: ", reason);
}).finally(()=>{
  console.log("We're in the finally part.");
});


//------------------------WITH FETCH---------------------------------------------
// http://localhost:3000/data.json
const result = fetch("https://github.com/green-fox-academy/panthera-ripped-syllabus");//fetch has a parmatere URL
result.then((response) => {//specify what to do with result
  return response.json();//we return promise object, parse it as json
}).then((data)=>{//called on return object: promise, then we need callback, get data as parameter
  console.log(data);
}).catch((err)=>{//if we get 404 error, than() will be called, not catch()
  console.log(err);
  console.log("Some error happened.");
});


function fetchJsonShort(){
  return fetch("http://localhost:3000/data.json")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}//much shorter than previous one

//-------------POST example, but don't have backend endpoint
const postWithFetchOptions = { //object
  method: "POST",
  body: JSON.stringify({
    "name": "Charles2",
    "age": "20",
    "gender": "male"
  }),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

//call function, without POST endpoint, because we specified it in object: method
//if we wnat to run it, we have to create app.post("/",...) route in app.js
fetchJsonShort("http://localhost:3000/", postWithFetchOptions);

// without json parse(responses is array of stirngs)
Promise.all([ //method which takes an array, we can specify more fetch or functions, that returns promise object
//they can be accessed parallel, so they can run in the background next to each other
  fetch("http://localhost:3000/data.json"),
  fetch("http://localhost:3000/data.json"),
  fetch("http://localhost:3000/data.json")
]).then((responses)=>{//we can access the result inside responses, whit ch is array!
  console.log(responses);//callback for to handle it
})

// with json parse(responses is array of json objects)
Promise.all([
  fetch("http://localhost:3000/data.json").then(res => res.json()), // the problem was that I forgot the () at the end of json
  fetch("http://localhost:3000/data.json").then(res => res.json()), // so not like res.jon, but res.jon() is the correct
  fetch("http://localhost:3000/data.json").then(res => res.json())
]).then((responses)=>{
  console.log(responses);
})

//example of asynch await
//reading asynch file (readFile not reaFileSynch ;))
async function readingFile(){ //asynch keyword fr asynchronus keyword :)
  try{
    const fileContent = await new Promise((resolve, reject) => { //wrapper: function fith resolve and reject parameter 
      //and inside I will call the read file
      fs.readFile("./some-data/dat.json", "utf-8", (err, data) =>{//to read file i have to provide callback with error and data parmeter
        //if I do not write await new Promise((resolve, reject) => {...fs.readFile...}, .readFile will not return anything to the fileContent
        //so I create wrapper promise around whole readFile fce
        if(err){
          console.log("error in callback");
          reject(err); // will jump to the catch block of try-catch and works fine
        } else {
          console.log("success in callback");
          resolve(data); 
        }
      })
    })
    console.log("Want to see here the content:", fileContent);//withou await keywor I will get a "promise pending"
  } catch(error){
    console.log("Error occured.\n", error);//whatever is happend in try, it will imidietly goes to chat and lo the error
  }
}

//fileContent is the result of whole thing :D