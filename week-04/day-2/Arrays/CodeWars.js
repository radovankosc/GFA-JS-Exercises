//Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function highestScoringWord(s) {
    const words = s.split(' ');
    let highestWord = '';
    let highestScore = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let score = 0;
      for (let j = 0; j < word.length; j++) {
        score += word.charCodeAt(j) - 96;
      }
      if (score > highestScore) {
        highestWord = word;
        highestScore = score;
      }
    }
    return highestWord;
  }
  console.log("This is my highest scoring word: " + highestScoringWord("veronika ada WillyX"));
  //----------------------------------------------------------------------------------  
  //   Input
  //   the list of game characters in a 2x6 grid;
  //   the initial position of the selection cursor (top-left is (0,0));
  //   a list of moves of the selection cursor (which are up, down, left, right);
  //   Output  
  //   the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);
  
  const fighters = [
      ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
      ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ];
  
    const moves = ['up', 'left', 'right', 'left', 'left'];

function streetFighterSelection(fighters, position, moves){
    const response = [];    
    const myLength = fighters[0].length - 1;
    
    //current position
    let positionX= position[0];
    let positionY= position[1];
    
    for(let i = 0; i < moves.length; i++){
      if(moves[i] == "up"){
        if(positionX == 1){
          positionX--;
        }     
        response.push(fighters[positionX][positionY]);
      }

      if(moves[i] == "down"){
        if(positionX == 0){
          positionX++;
        }
        response.push(fighters[positionX][positionY]);
      }

      if(moves[i] == "left"){
        if(positionY == 0){
          positionY = myLength;   //fighters[0].lenght;               
        }else{
          positionY--;
        }
        response.push(fighters[positionX][positionY]);
        }
        
        if(moves[i] == "right"){
        if(positionY == myLength){
          positionY = 0;        
        }else{
            positionY += 1;
        }      
        response.push(fighters[positionX][positionY]);
    } 
}     
    return response; 
}

console.log("This is Street Fighters Selection: " + streetFighterSelection(fighters, [0,0], moves))
//----------------------------------------------------------------------------------
//return unique number in array
function findUniq(arr) {

  const occurrences = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    occurrences[num] = (occurrences[num] || 0) + 1;
  }

  // find the number with an occurrence count of 1 and return it
  for (const [num, count] of Object.entries(occurrences)) {
    if (count === 1) {
      return Math.round(parseInt(num));
    }
  }
}

console.log("This is my unique number: " +findUniq([1,2,3,3,1]))
//----------------------------------------------------------------------------------
// to remove all consecutive duplicate letters from each string in the array.
function dup(s) {
  let returnArray = []

  for(let i = 0; i < s.length; i++){
    let word = s[i];
    let arrayOfLetters = word.split("");

    let modifiedArr = [];
    
  for(let j=0; j< arrayOfLetters.length; j++){
    if(arrayOfLetters[j]!=arrayOfLetters[j+1])
      modifiedArr.push(arrayOfLetters[j]);
  }

  returnArray.push(modifiedArr.toString().replace(/,/gi,""));    
  }

  return returnArray;   
    
  };
  console.log("This is my /remove all consecutive duplicate letters/: " + dup(["kelless","keenness"]));

  //-------------------------------------------------------------------------------------------

//   t receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

// If the second string isn't a valid rotation of the first string, the method returns -1.

  function shiftedDiff(first,second){
    let response = null;
    let arrFirst = first.split("");
   
      
        if(first === second){
          response = 0;
          return response;
        }

        for(let i = 0; i < arrFirst.length; i++){
          
          
          if(arrFirst.toString().replace(/,/gi,"") === second){
            return response;
          }else{
            let lastS = arrFirst.slice(arrFirst.length - 1, arrFirst.length);//takes: starts, end, returns sliced Array!!!
            arrFirst.pop();
            arrFirst.unshift(lastS[0]);
            response ++;
          }       
        
          if(i == arrFirst.length-1 && arrFirst.toString().replace(/,/gi,"") != second ){
            return -1;
          }
        }
      }      

  console.log("This is my /shift letters from end to beginning/: " + shiftedDiff("lirektaa", "talirek"));


//SPLICE(); //delete 4th element = index 3
let myArray = ["apple", "banana", "cherry", "orange", "pear"];
let myVystrihnutyString = myArray.splice(3, 1).toString();// string, otherwise vystřihnutá array of one element
console.log(myVystrihnutyString, myArray); //array je modifikovaná

//SPLICE(); //rewrite 4th element = index 3
let myPrelepenyString = myArray.splice(3, 1, "meloun").toString();
console.log(myPrelepenyString, myArray); //array je modifikovaná

//SPLICE(); //add 4th element = index 3
myArray.splice(3, 0, "dorticek").toString();
console.log(myArray); //array je modifikovaná
//---------------------------------------------------------------------------------------------
//Pascal Triangle:
/* 
let matrix = [     
  [1], 
  [1, 1],
  [1, 2, 1], 
  [1, 3, 3, 1], 
  [1, 4, 6, 4, 1]
]
*/
function pascalsTriangle(n) {
let matrix = []
if( n === 1){    
  return [1];
}else{
  matrix.push([1]);
}

if( n === 2){
  return [1,1,1];
}
else{matrix.push([1,1]);    
}
  
if(n > 2){
  let myNum;
  for(let i = 2; i < n; i++ ){
  let lastArr = matrix[matrix.length - 1];      
    
    let newArr = [];
    for (let j = 0; j < lastArr.length - 1; j++){
      newArr.push(lastArr[j] + lastArr[j+1]);
    }
      newArr.unshift(1);
      newArr.push(1);
    
      matrix.push(newArr);
  }  
  let responseArr = [].concat(...matrix);//to make matrix flat(create neww arr and concat it with the spread operator "..."")
return responseArr;
}   
}
console.log("This is my Pascal triangle: " + pascalsTriangle(6));
//---------------------------------------------------------------------------------------------------------
//map()
const arrayOfF = [1, 2, 3, 4, 5];
let newArr = arrayOfF.map(function(element) {
  if(element === 3){
    return element + 1;
  }
  else{
    return element;
  }
});
console.log(newArr);

//sort()
//ASC
let arrASC = [5,810,7,8,9];
console.log("REVERSED:" + arrASC.reverse());
arrASC.sort((a,b) => a-b);
console.log("ASC: " + arrASC);
//REVERSED


//forEach()
let arrayOfS = ["i", "k"];
arrayOfS.forEach(function(element, index, arr) {
  arr[index] = "a";
});

//sort()

//break

//continue

//unique Array:Set
const names = ['kb', 'kl', 'kk', 'kb', 'kl', 'ka']
console.log("names"+ names);
const unique_names = [...new Set(names)] //[ 'kb', 'kl', 'kk', 'ka' ]
console.log("unique names" + unique_names);

const nums = [5, 5, 2, 1235, 1235, 777,55,5]
console.log("nums" + nums);
const unique_nums = [...new Set(nums)] //[ 'kb', 'kl', 'kk', 'ka' ]
console.log("zerooooooo" + unique_nums[0]);
let abf = unique_nums.toString().replace(/,/gi, "");
console.log("unique nums" + abf);

console.log(arrayOfS);
//----------------------------------------------------------------------------------
function wheatFromChaff(values) {
  let head = 0;
  let butt = values.length - 1;
  let temp = 0;

  while(head < butt) {
      while(values[head] < 0) {  //go untill hit the positive from head
          head++;
      }        
      if(head < butt && values[head] > 0) { //if head is still head and not dived in butt and if is there any positive number, store this value to temp
          temp = values[head];
      }
      while(values[butt] > 0) { //move index of butt untill hit negative ()
          butt--;
      }
      if(head < butt && values[butt] < 0) {
          values[head] = values[butt];
          values[butt] = temp;
      }  
    //go up for while loop again untill head index is < butt index
  }  
  return values;
}
//-------------------------------------------------------------------------------------------
//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(array1,array2){
  let arrForReturn = [];
  
  for(let i = 0; i < array1.length; i++){ //BREAK: closes this actual iteration and starts upcomming one
    let wordFromArr1 = array1[i];    
//       for (const wordFromArr1 of array1) {
    
    for(let j = 0; j < array2.length; j++ ){
      let wordFromArr2 = array2[j];
//         for (const wordFromArr2 of array2) {      
      
      if(wordFromArr2.includes(wordFromArr1)){
        arrForReturn.push(wordFromArr1);
        break;
      }
    }    
  }  
  return arrForReturn.sort();
}
console.log("This is my one array strings of two arrays of strings:" + inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]));

//---------------------------------------------------------------------------------
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
function validParentheses(parens) {
  let arr = parens.split("");
  
  while(arr.length > 1){
  let finalArr = [];    
  
    let temp = 0;
    for(let i = temp; i < arr.length; i++){
      if(arr[i] === "(" && arr[i+1] === ")"){
        arr.splice(i, 2);
        temp = 0;
      }
    } 
  }
  
  console.log(arr);
  if(arr.length === 0){
    return true;
  }
  
  console.log(arr);
  return false;
}

console.log(validParentheses("(())((()())())"));
//------------------------------------------------------------------------------------------------------------------------------
function hourglassSum(arr) {
  let myArr = [];
  for(let i = 0; i < arr.length - 2; i++){
      let myNum = 0;
      for(let j = 0; j < arr.length - 2; j++){
          myNum = arr[i][j] + arr[i][j+1]+ arr[i][j+2]
                  + arr[i+1][j+1]
                  + arr[i+2][j] + arr[i+2][j+1]+ arr[i+2][j+2];
                  console.log(myNum);
                  
          myArr.push(myNum);
      }
  }
  let response;
  while(myArr != 1){
      
      for(let g = 0; g < myArr.length; g++){
          if(myArr[g]< myArr[g+1]){
              myArr.splice(myArr[g],1);
          }
      }
  }
  return myArr[0];
}

//----------------------------------------------------------------------------------------
//pile of towels
//hi likes blue :D and after wash he sort them with blue on the top
// const pileOfTowels = ["blue", "red", "blue", "red", "blue"];
//     const weeklyUsedTowels = [2, 1, 4, 2];
//     const expected = ["blue", "red", "red", "blue", "blue"];

function sortThePile (pileOfTowels, weeklyUsedTowels) {
  let pile = pileOfTowels;
  
  for(let i = 0; i < weeklyUsedTowels.length; i++){        
      let usedTowels = pile.splice(pile.length - weeklyUsedTowels[i], weeklyUsedTowels[i]);
      let sortedTowels = [];
      for(let j = 0; j < usedTowels.length; j++){
          if(usedTowels[j].charAt(0) == "r"){
              sortedTowels.unshift(usedTowels[j]);
          }else{
              sortedTowels.push(usedTowels[j]);
          }
      }       
      pile = pile.concat(...sortedTowels);        
  }    
return pile;
}

//--------------------------------------------------------------------------
//Russian pluiaral
const makePlural = (options, number) => {
  let lastNum = number % 10;
  let lastTwoNum = number % 100;  
  if((lastNum >= 5 || (lastTwoNum > 10 && lastTwoNum < 15 )) || lastNum ===  0) {
    return options[2];
  }   
  if(lastNum === 1) {
  return options[0];   
  }    
  return options[1];
}
//--------------------------------------------------------------------------
//Unique in order, get unique in order,  from string 'AAAABBBCCDAABBB' return array of letters ['A','B','C','D','A','B']
function uniqueInOIrder(iterable){
  let currentUnique = iterable[0];
  let responce = [];
    
  if(iterable.length === 0){
    return responce;
  }
    
  responce.push(iterable[0]); //first push firs letter of string = currentUnique letter
  for(let i = 0; i < iterable.length; i++){
    if(currentUnique != iterable[i]){
      responce.push(iterable[i]);
      currentUnique = iterable[i];
      }
  }
    return responce;
  }
//--------------------------------------------------------------------------
