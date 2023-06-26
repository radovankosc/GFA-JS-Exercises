export{}
//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

function bubble (numbers: number[]): number[]
{
    numbers.sort((a, b) => a - b);
    //JUST ANOTHER SYNTAX
    //numbers.sort(function (a, b) {
    //    return a - b
    //})
    return numbers;
}
function advancedBubble (numbers: number[], trulish: boolean): number[]
{
    if (trulish){
        numbers.sort((a, b) => a + b); //FOR ASCENDING ORDER

    }else{
    numbers.sort((a, b) => a - b); //FOR DESCENDING ORDER
    }    
    return numbers;
} 
console.log(bubble([34, 12, 24, 9, 5]));
console.log(advancedBubble([34, 12, 24, 9, 5], true));
