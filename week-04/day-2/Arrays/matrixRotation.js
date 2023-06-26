let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]; 

//one left clockwise
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
console.log(rotate(matrix));

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//two left clockwise
function rotate2TimesLeft(matrix){
    let firstRollResponce = []; //from up to down like mirror    
    let tmp = [];
    for(let a = matrix.length-1 ; a >=0; a--){
        firstRollResponce.push(matrix[a])        
    }
    
    let secondRollResponce = []; //firstRollResponce from R to L
    let row = 0;    
    for(let b = 0; b < matrix.length; b++){
        let tmpRow = [];
        for(let i = firstRollResponce.length - 1; i >= 0; i--){
            tmpRow.push(firstRollResponce[row][i]);       
        }
        row++;
        secondRollResponce.push(tmpRow);
    }
    
    return secondRollResponce;
}

console.log(rotate2TimesLeft(matrix));

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//rotate right aginst clockwise
function rotateRight(matrix){
    let responce = [];
    
    let col = matrix.length - 1;
    for(let a = 0; a < matrix.length; a++){ //how many times = a
        let tmp = [];                       //tmp row 
        for(let r = 0; r < matrix.length; r++){
            tmp.push(matrix[r][col]);       //push to tmp row
        }
        col--;                              //decrease col from end to beginning
        responce.push(tmp);                 //push created row
    }
    return responce;    
}
console.log(rotateRight(matrix));

//rotate 2 times right against clockwise
function rotate2TimesRight(matrix){
    let responce = [];
    let firstRotMx = [];
    for(let i = matrix.length -1; i >=0; i--){
        firstRotMx.push(matrix[i]);
    }   
            //firstRotMx is ready 

    let row = 0;
    for(let a = 0; a < matrix.length; a++){
    let tmp = [];
    for(let c = firstRotMx.length - 1; c >= 0; c--){        
        tmp.push(firstRotMx[row][c]);
    }
    responce.push(tmp);
    row++;
}
    return responce;
}
console.log(rotate2TimesRight(matrix));

//mirror matrix