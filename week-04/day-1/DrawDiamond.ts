let p = 4;
let stringDiamond = "";
// External loop
for (let i = 1; i <= p; i++) {
  // printing spaces
 // for (let j = 1; j <= p - i; j++) //both loops working
  for (let j = p; j > i; j--) { //this loop executes times, after every execution it prints * 
     stringDiamond += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    stringDiamond += "*";
  }
  stringDiamond += "\n";
}
for (let i = 1; i <= p - 1; i++){ //execute 3 times, because from 1 to 3(p-1)
    for (let j = 0; j < i; j++){
        stringDiamond += " ";
    }
    for (let k = (p - i) * 2 - 1; k > 0; k--) {
        stringDiamond += "*";
    }
    stringDiamond +="\n";

}

console.log(stringDiamond);