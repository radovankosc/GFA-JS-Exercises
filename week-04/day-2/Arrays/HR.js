//array, min max
function miniMaxSum(arr) {
    let myArrForSplice = arr;
    let myArr = [];
    for(let i = 0; i < arr.length; i++ ){
        myArrForSplice = arr; //pu
        let deleted = myArrForSplice.splice(i,1)[0];//returns array of sliced, so index[0]!!        
        let myNum = 0;
        for(let num of myArrForSplice){
            myNum += num;            
        }  
              
        myArr.push(myNum);
        myArrForSplice.splice(i,0,deleted);
        
    }
    
    return Math.max(...myArr) + " " + Math.min(...myArr); // ...!
}
console.log("This is my min and max array: " + miniMaxSum([1,2,3,4,5]));
//----------------------------------------------------------

//hourglass patern of highest sum() from 2D 6x6 array
function hourglassSum(arr) {
    let myArr = [];
    for(let i = 0; i < arr.length - 2; i++){
        let myNum = 0;
        for(let j = 0; j < arr.length - 2; j++){
            myNum = arr[i][j] + arr[i][j+1]+ arr[i][j+2]
                    + arr[i+1][j+1]
                    + arr[i+2][j] + arr[i+2][j+1]+ arr[i+2][j+2];
                    
            myArr.push(myNum);
        }
    }
return Math.max(...myArr);
}

console.log("This is my 2D array biggest numn: " + hourglassSum([[1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]]));
//---------------------------------------------------------
//Alternating Characters: return integer of deletions
//BBBBB
// ABABABAB
// BABABA
// AAABBB

function alternatingCharacters(s) {
    let response = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i+1]){
            response ++;           
        }
    }
    return response;
}
console.log("Alternating characters" + alternatingCharacters("ABABAAAA"));
//---------------------------------------------------------
//randsomeNote Kiddnapper note match words from magazine
function checkMagazine(magazine, note) {
    
    let myMagazine = magazine;
    let myNote = note;
    
    for(let i = 0; i < note.length; i++){
        if(myMagazine.includes(note[i])){
            myMagazine.splice(myMagazine.indexOf(note[i]), 1);
            note[i]=0  
        }else{
           note[i]=1            
        }
    }
        
    if(note.includes(1)){
        console.log("No");
    }else{
        console.log("Yes");        
    }

}
//---------------------------------------------------------
//circular array,  shifts each of the array's elements  unit to the left
function rotLeft(a, d) {
    let returnArr = a;
    console.log(returnArr);
    for(let i = 0; i < d; i++){
        let tmp = a[0];
        returnArr.shift();
        returnArr.push(tmp);
    }
    return returnArr;

}
console.log("This i my circular array: " + rotLeft([1,2,3],2));

//--------------------------------------------------------------
//Making anagrams cde,bce, how many deletions wehave to do, anagrams: word a includes every letter from word b, no order condition, but frequency order is! (how many times is same letter included)
function makeAnagram(a, b) {
    let number = 0;
    let stringA = a.split("");
    let stringB = b.split("");
    
    for(let i = 0; i < a.length; i++){ //we have to iterate through a!!! and no modify this a, so it is necessary to crate copy of a where we will be deleting from :)
        if(stringB.includes(a[i])){
            stringA.splice(stringA.indexOf(a[i]),1);
            stringB.splice(stringB.indexOf(a[i]),1);             
        }
    }
    return number = stringA.length + stringB.length
}
//--------------------------------------------------------------
//TwoStrings
//two strings, determine if they share a common substring. A substring may be as small as one character.
function twoStrings(s1, s2) {
    for(let i = 0; i < s1.length; i++){
        if(s2.includes(s1[i])){
            return "YES";
        }else{
            continue; //
        }
    }
return "NO";
}

//--------------------------------------------------------------
//SubArrayDIvision


//--------------------------------------------------------------
//Compare Triples: if ALice or Bob win? given 2 arrays of integers and compare them and increase score for who will win
function compareTriplets(a, b) {
    let returnArr = [];
    let aRes = 0;
    let bRes = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] === b[i]){
            continue;
        }
        else if(a[i] > b[i]){
            aRes++            
        }else{
            bRes++
        }
    }
    returnArr.push(aRes);
    returnArr.push(bRes);
    return returnArr;
}


//--------------------------------------------------------------
//diagonal array sums difference
function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let tmp = arr.length - 1;
    
    for(let i = 0; i < arr.length; i++){   
           sum1 += arr[i][i];   
           
        for(let j = tmp; j >= 0; j--){ 
           tmp --;      
           sum2 += arr[i][j]; 
           break;     
        }     
       }
    return Math.abs(sum1 - sum2);
}
//OR
function diagonalDifference2(arr) {
    let sum1 = 0;
    let sum2 = 0;

    for(let i = 0; i < arr.length; i++){
        sum1 += arr[i][i];
        sum2 += arr[i][arr.length - i - 1];
    }
    return Math.abs(sum1 - sum2);
}

console.log("This is my difference between diagonals sum: " + diagonalDifference([[0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]]));

//---------------------------------------------------------------
//Pluis Minus
//given arr of neg, pos & zeros --> print 6 decimal integers of includeds pos, neg, zeros
function plusMinus(arr) {
    let neg = 0;
    let pos = 0;
    let zero = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            zero++;
        }
        if(arr[i] > 0){
            pos++
        }
        if(arr[i] < 0){
            neg++
        }
    }
    console.log((pos/arr.length).toPrecision(6));
    console.log((neg/arr.length).toPrecision(6));
    console.log((zero/arr.length).toPrecision(6));
}
//--------------------------------------------------------------
//Time Conversion - get string of time with PM, AM and return military time (without AM/PM &  if 19:05 --> 07:05, if 24PM --> 0, if 12AM -->00)
function timeConversion(s) {
    let currentHours = s.slice(0,2);
    if(s[s.length - 2] === "P"){
        let hours = parseInt(s.slice(0,2))
        if(hours < 12){
            hours += 12;
        }       
        s = s.replace(currentHours, hours);
    }
    if(s[s.length - 2] === "A" && currentHours === "12"){
        let hours2 = "00";        
        s = s.replace(currentHours,hours2);
    }
    let stringArr = s.split("");
    
    stringArr.splice(stringArr.length - 2, 2);
    let myTime = stringArr.toString().replace(/,/gi,"");
    return myTime;  
}
console.log(timeConversion("12:45:54PM"));

//--------------------------------------------------------------
//BirthDay Cake Candless
//return smount of blown candless, the highest ones
function birthdayCakeCandles(candles) {
    //create map object: { '1': 0, '2': 0, '3': 0 }
    let myCandles = {};
    for(let i = 0; i < candles.length; i++){
        myCandles[candles[i]] = 0;
    }
    
    //iterat map object, increase amount if one or more than one times there
    for(let j = 0; j < candles.length; j++){
        if(myCandles.hasOwnProperty(candles[j])){
            myCandles[candles[j]] ++; //increase value of specific key!
        }
    }
    //get array of values
    let arrayOfValues = Object.values(myCandles);  
    
    return Math.max(...arrayOfValues);
}
//--------------------------------------------------------------
//CamellCase
//how many words?
//get string of words, firsts starts with lower, every next word with Upper
function camelcase(s) {
    let response = 1;
    for(let i = 0; i < s.length; i++){
        let currentNum = s[i].charCodeAt(0);
        let letterLow = s[i].toLowerCase();
        let lowNum = letterLow.charCodeAt(0);
        if(currentNum < lowNum){
            response ++;            
        }
    }
    return response;
}
console.log(camelcase("saveChangesInTheEditor"));
//--------------------------------------------------------------
//Strong password:secret password with 4 conditions
function minimumNumber(n, password) {
    let returnNum = 0;
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";
    let conditionN = 1;
    let conditionLC = 1;
    let conditionUC = 1;
    let conditionSC = 1;
    
    for(let i = 0; i < n; i++){
        if(numbers.includes(password[i])){
            conditionN = 0;
        }
        
        if(lower_case.includes(password[i])){
            conditionLC = 0;
        }
        
        if(upper_case.includes(password[i])){
            conditionUC = 0;
        }
        
        if(special_characters.includes(password[i])){
            conditionSC = 0;
        }      
    } 
    
    let conditions = conditionN + conditionLC + conditionUC+ conditionSC;   
    
    if(n < 6){
        if(conditions != 0){
        returnNum += conditions;
            if(returnNum < 6){
                returnNum += 6-(n+conditions);
            }            
        }else{
            returnNum += 6-n
        }
    }else 
        returnNum += conditions;
    
    return returnNum;
}
//---------------------------------------------------------------------------------------
//Gemstones


//--------------------------------------------------------------
//SuperRedused String


//-----------------------------------------------------------------------------------------