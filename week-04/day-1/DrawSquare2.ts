'use strict';
let bumber = 5;
let bstaris = "";
// IF I WRITE i = 0, I MUST ADD i < number AND number -1 in if statement
// for (let i = 0; i < number; i++){  
//     for(let l = 0; l < number; l++){
//         if (i === 0 || i === number - 1){
//             staris += "*";
//         }
//         else {
//             if (l === 0 || l === number - 1){
//                 staris += "*";
//             }
//             else {
//                 staris += " ";
//             }
//         }
//     }
//     staris += "\n";
// }
// console.log(staris)


//THIS IS BETTER SOLUTION WITH ELSE OF STATEMENT THAN NESTING ELSE & IF ABOVE
for (let i = 1; i <= bumber; i++){
    for(let l = 1; l <= bumber; l++){
        if (i === 1 || i === bumber){
            bstaris += "*";
        }else if (l === 1 || l === bumber){
                bstaris += "*";
        }else {
                bstaris += " ";
        }        
    }
    bstaris += "\n";
}
console.log(bstaris)
