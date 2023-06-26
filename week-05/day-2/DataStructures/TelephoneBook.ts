export{}
let map: {[key: string]: string } = {
    "William A. Lathan": "405-709-1865",
    "John K. Miller": "402-247-8568",
    "Hortensia E. Foster": "606-481-6467",
    "Amanda D. Newland": "319-243-5613",
    "Brooke P. Askew": "307-687-2982"
}
// What is John K. Miller's phone number?
console.log(map["John K. Miller"]);
// Whose phone number is 307-687-2982?
for(let [names, numbers] of Object.entries(map)){
    if(numbers == "307-687-2982"){
        console.log(names);
    }
}
// Do we know Chris E. Myers' phone number? (yes/no)
let known: boolean = Object.hasOwnProperty("Chris E. Myers");
if(known){
    console.log("yes")
}else{
    console.log("no");
}
