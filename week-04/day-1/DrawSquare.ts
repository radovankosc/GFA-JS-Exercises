'use strict';
let number = 5;
let staris = "";
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

for (let i = 1; i <= number; i++){
    for(let l = 1; l <= number; l++){
        if (i === 1 || i === number){
            staris += "*";
        }
        else {
            if (l === 1 || l === number){
                staris += "*";
            }
            else {
                staris += " ";
            }
        }
    }
    staris += "\n";
}
console.log(staris)
