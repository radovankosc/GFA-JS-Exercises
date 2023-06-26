//1
// Sum of Digits / Digital Root

// Given n, take the sum of the digits of n.
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

// Examples:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function sumOfDigits(integer){
    // let myNum = integer;
    while(integer > 9){
        let currentNumOfFL = 0;
        let arr = integer.toString().split("");
        for(let i of arr){
            currentNumOfFL += parseInt(i);            
        }
        integer = currentNumOfFL;   
    }    
    return integer;
}

console.log(sumOfDigits(3));
//-------------------------------------------------------------------------------------------------
//2
// //"Matrix rotate left
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// Output

// [ [ 7, 4, 1 ],
//   [ 8, 5, 2 ],
//   [ 9, 6, 3 ] 
// ]"

function rotate(matrix){
    let responce = [];
    
    let col = 0;
    
    //how many times = a
    for(let a = 0; a < matrix.length; a++){
        let tmpRow = [];
        for(let i = matrix.length -1 ; i >= 0; i--){        
           tmpRow.push(matrix[i][col]);
        }
        responce.push(tmpRow)
        col++;
    }
    return responce;
}
console.log(rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));

//----------------------------------------------------------------------------------
//3
// Sum of Digits / Digital Root
// ('n', 's', 'e', or 'w' only)
function getValidWalk(arr){
    if(arr.length != 10){
        return false;
    }
    
    let n = 0;
    let s = 0;
    let e = 0;
    let w = 0;
    
    for(let l of arr){
        if(l == "n"){
            n++;
        }
        if(l == "s"){
            s++;
        }
        if(l == "e"){
            e++;
        }
        if(l == "w"){
            w++;
        }        
    }
    
    if(n == s && e == w){
        return true;
    }
    return false;    
  }
  console.log(getValidWalk(["n","n", "n", "s", "s", "s", "e", "e", "w", "w"]));
//---------------------------------------------------------------------------------------------
//4
//pangram
//"The quick brown fox jumps over the lazy dog" 

function isPangram(string){
    let alphabet = "qwertzuioplkjhgfdsayxcvbnm";
    let myAlphabet = alphabet.split("");
    let myString = string.toLowerCase().split("");
    
    for(let i = 0; i < myString.length; i++){
        if(myAlphabet.includes(myString[i])){
            let index = myAlphabet.indexOf(myString[i]);
            myAlphabet.splice(index, 1, 8);
        }
    }
    for (let l of myAlphabet){
        if(l != 8){
            return false;
        }        
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog" ));
//---------------------------------------------------------------------------------
//5
//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []
function isIncluded(arr1, arr2){
    let responce = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr2[j].includes(arr1[i])){
                responce.push(arr1[i]);
                break;
            }
            
        }
    }
    
    return responce.sort();
}
console.log(isIncluded(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]));
//--------------------------------------------------------------------------------------------
//6//Tower of HAnoi....
//--------------------------------------------------------------------------------------------
//7
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// "The sunset sets at twelve o' clock." --> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
    let resultArr = [];
    let myString = text.toLowerCase();
    for(let i = 0; i < myString.length; i++){
        if(myString.charCodeAt(i) > 96 &&
           myString.charCodeAt(i) < 123){        
            resultArr.push(myString.charCodeAt(i) - 96 );
        }     
    }
    return resultArr.toString().replace(/,/gi, " ");
}

//---------------------------------------------------------------------------------
//8
// "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
function likes(names) {
    if(names.length == 0){
      return "no one likes this";
    }
    if(names.length == 1){
      return names[0] + " likes this";
    }
    if(names.length == 2){
      return names[0] + " and " + names[1] + " like this";
    }
    if(names.length == 3){
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    }
    let num = names.length - 2;
    return names[0] + ", " + names[1] + " and " + num +" others like this"; 
}
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

//---------------------------------------------------------------------------------
//9
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
function moveZeros(arr) {
    let arr0 = [];
    let arrOthers = [];
    for(let i = 0; i < arr.length; i++){
        
        if(typeof arr[i] == 'string' || typeof arr[i] == 'boolean' || typeof arr[i] == 'object' || typeof arr[i] == 'undefined'){
            arrOthers.push(arr[i]);
            continue;
        }
      
        if( arr[i] != 0){
          arrOthers.push(arr[i]);
        }else{
          arr0.push(arr[i]);
        }
    }
    return arrOthers.concat(...arr0);
}
//----------------------------------------------------------------------------------
//10

//----------------------------------------------------------------------------------
//11
//first non repeating letter
// if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
function firstNonRepeatingLetter(s) {
    if(s.length == 0){
      return "";
    }
  //create map object
    let myString = s.toLowerCase().split("");
    let obj = {};
    for(let i = 0; i < myString.length; i++){
        obj[myString[i]] = 0;
    }
  // iterate through array and add counts as values to keys
    for(let j = 0; j < myString.length; j++){
        if(obj.hasOwnProperty(myString[j])){
           obj[myString[j]] ++;
           }
    }
  
  //if all values repeted return ""
    let isStillChanceThereisUnique = true;
    let arrOfValues = Object.values(obj);
    for(let v of arrOfValues){
        if(v > 1){
            isStillChanceThereisUnique = false;
        }else{
            isStillChanceThereisUnique = true;
        }
    }
    
    if(isStillChanceThereisUnique == false){
        return  "";
    }
  //first non repeted & respect upper and lower cases
    let letter = "";
    for(let [key,value] of Object.entries(obj)){
        if(value == 1){
            letter = key;
            let index = myString.indexOf(key);
                if(s.charCodeAt(index) <= 90){
                    console.log(key);            
                    return key.toUpperCase();
                }else{
                    return key;
                }
        }        
    }
}


//----------------------------------------------------------------------------------
//12
// look and say sequence
// version startin with "1": ["1", "11", "21, "1211", "111221", ...]. 
// You can see that the second element describes the first as "1(times number)1",
// the third is "2(times number)1" describing the second, the fourth is "1(times number)2(and)1(times number)1" and so on.
// lookAndSaySequence("1", 1)   === "1"
// lookAndSaySequence("1", 3)   === "21"
// lookAndSaySequence("1", 5)   === "111221"
// lookAndSaySequence("22", 10) === "22"
// lookAndSaySequence("14", 2)  === "1114"

function lookAndSaySequence(firstElement, n){
    let arr =[firstElement];
    
    for(let i = 1; i < n; i++){        
        let myArr = arr[i-1].split(""); //previous element in array and split it to string  
        // console.log(myArr);
        
            let element = ""; //creating current element for current level
            
            let count = 1;
            for(let i = 0; i < myArr.length; i++){//iterate over current level
                if(myArr[i]==myArr[i+1]){ //if upcoming number is the same increase count
                    count++;
                }else{
                    element += count.toString() + myArr[i]; //creating element
                }
            }  
        
        arr.push(element); //element pushed to array and for loop(i) keep going until length of array
        }

    return arr[arr.length - 1];    
}
console.log(lookAndSaySequence("1", 1));
console.log(lookAndSaySequence("1", 5));
console.log(lookAndSaySequence("22", 10));
console.log(lookAndSaySequence("14", 2));

//----------------------------------------------------------------------------------------
//13
// Create a function called firstNonRepeatingCharacter that takes in a string as a parameter and returns back the first 
// nonrepeating character from it.

// Example:
// input -> "aaabcccdeeef" output -> 'b'  

function firstNonRepeatingCharacter(string){
    let obj = {};
    for(let i = 0; i < string.length; i++){
        obj[string[i]] = 0;
    }
    
    for(let j = 0; j < string.length; j++){
        if(obj.hasOwnProperty(string[j])){
            obj[string[j]]++;
        }
    }
    
    for(let [key, value] of Object.entries(obj)){
        if(value == 1){
            return key; 
        }
    }
}

console.log(firstNonRepeatingCharacter("aaabcccdeeef"));
//----------------------------------------------------------------------------------------
//14
// Custom Ignore (kinda simulating the work of the gitignore)

// Create a function that takes an array of strings and a Path to a file as parameters and returns the file names in a list/array that should not be ignored. A file should be ignored when their extension is in the txt file.
// Hint: the "." is a special character in the regular expressions

// Examples:
// input: 
//   - files: [asd.txt, superlongfilename.java, definietlynotavirus.exe]
//   - ignore txt file: 
//     .txt 
//     .exe

// output: 
//   - files: [superlongfilename.java]

function getValid(files, string){
    let arrOfIgnored = string.split(" ");
    arrOfIgnored.splice(0,3);
    
    let noNamesArr = [];
    let myFiles = files;
    for(let e of myFiles){
        let indexOfDot = e.indexOf(".");
        let eSplited = e.split(""); 
        eSplited.splice(0, indexOfDot + 1); //splice only on Array!!!
        eSplited.unshift(".");
        let eToString = eSplited.toString().replace(/,/gi,"");
        noNamesArr.push(eToString);
       } 
    
    let returnArr = [];
    for(let el of noNamesArr )
        if(!arrOfIgnored.includes(el)){
            returnArr.push(files[noNamesArr.indexOf(el)]);
        }
    return returnArr;
}
console.log(getValid(["asd.txt", "superlongfilename.java", "definietlynotavirus.exe"],"ignore txt file: .txt .exe"));
//----------------------------------------------------------------------------------------
//15
// Create a function called isBalanced(int[][] matrix) that takes in a 2D array of whole numbers as parameter and decide if the sum of the numbers below the diagonal is equal to the sum of the numbers above the diagonal. Return true if yes or false otherwise.

// Example1:
// [0, -1, 5, 4]
// [5, 0, 5, 1]
// [1, 2, 0, 1]
// [1, 2, 3, 0]

// upper part: -1+5+5+1+1+4 = 15, lower part: 5+2+3+1+1+2 = 14   15 != 14  ->false

// Example2:
// [1, 0, 1, 4]
// [5, 2, 9, 3]
// [1, 2, 3, 1]
// [1, 6, 3, 4]

// upper part: 0+1+4+9+3+1 = 18, lower part: 5+1+2+1+6+3 = 18  18=18 -> true

function isBalanced(matrix){
    let upper = 0;
    let lower = 0;
    
    let row = 0;
    let tmpColumn = 1;
    
    for(let a = 0; a < matrix.length -1; a++){ 
        for(let c = tmpColumn; c < matrix.length; c++){
            upper += matrix[row][c]; 
            lower += matrix[c][row];//only row = columns!!!!
        }
        tmpColumn ++;
        row++;
    }    
    if(upper == lower){
        return true;
    }
    return false;    
}

console.log(isBalanced(14,
[[0, -1, 5, 4],
[5, 0, 5, 1],
[1, 2, 0, 1],
[1, 2, 3, 0]]));
//----------------------------------------------------------------------------------------
//15
// sort();
let arr = [500, 42, 56, 1, 2];
console.log(arr.sort((a,b)=> b- a));
//replace
let rrr = "trala laaaa";
console.log(rrr.replace("tral","ggggggggggg"));
//------------------------------------------------------------------------------------
//16//smalest difference
// input -> [3, 1, 56, 34, 55]
// output: 1                (diff between 56 and 55)


function smallestDif(arr){
    let myNum = Math.abs(arr[0]-arr[1]);
    let start = 0;
    let end = 0;
    for(let i = 1; i < arr.length; i++){
        
        for(let j = 0; j < arr.length; j++){
            if(arr[i] - arr[j] != 0 && arr[i] - arr[j] < myNum){
                myNum = Math.abs(arr[i] - arr[j]);
                start = arr[i];
                end = arr[j];
            }
        }

    }
    return "The smallest diff between "+ start +" and " + end + " is: " + myNum; 
    
}
console.log(smallestDif([-3, 1, 56, 34, 55]));
//-------------------------------------------------------------------------------
//17
// Create a function called wordCounter that takes in a string word to count and a list of strings as content. 
// It should return with a number that represents the occurences of the provided word in the content.
// Hint: regex for punctuations: "\p{Punct}"

// Example:
// input -> "asd", {"Asd asddékasdjfbuwg asd.", "nfoitgibwuob", "dsa asd"}
// output -> 3

// Punctuation: One of !"#$%&'()*+,-./:;<=>?@[]^_`{|}~
// "\p{Punct}"

function wordCounter(string, arr){
    let num = 0;
    for(let i = 0; i < arr.length; i ++){
        
        let word = arr[i];
        for(let j = 0; j < word.length; j++){
            if(word.includes(string)){
                num ++;
                word = word.replace(string, "");
                console.log(word);
                
            }
        }

        
    }
   return num; 
}
console.log(wordCounter("asd", ["Asd asddékasdjfbuwg asd.", "nfoitgibwuob", "dsa asd"]));
//---------------------------------------------------------------------------------------------
//18
// Create a function called rowsVsCols that takes in a 2D array and
// returns back the index and the type of the row/column with the largest sum.
// (By type I mean row or col as string, look at the example)
// Assume there is always a largest one.

// Example:
// Input:
// [1,2,3,4]
// [1,2,3,4]
// [1,2,3,4]

// Output: {col= 3}

function rowsVsCols(arr){
    let col = 0;
    let colN = 0;
    let row = 0;
    let rowN = 0;
    
    for(let r = 0; r < arr.length; r++){
        
        let currRow = 0
        for(let c = 0; c < arr[r].length; c++){
            currRow += arr[r][c];
            
        }
        if (currRow > row){
            row = currRow;
            rowN = r;
        }        
    }
    
    let currInd = 0;
    for(let a = 0; a < arr[0].length; a++){
        let currCol = 0;
        for(let rr = 0; rr < arr.length; rr++){  
            currCol += arr[rr][currInd];            
        }
        currInd ++;       
        
        if(currCol > col){
            col = currCol;
            colN = a;            
        }        
    }
    
    if(col > row){
        return "col= " + colN;
    }
    return "row= " + rowN;
    
    
}
console.log(rowsVsCols([[1,2,3,4],[1,2,3,4],[1,2,3,4]]));







