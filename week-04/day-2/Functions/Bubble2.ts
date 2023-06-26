export{}
//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

function bubble (numbers: number[]): number[]{
    for (let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++){
            while (numbers[i] > numbers[j]){
            let tempValue = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = tempValue;
            }
        }
    }
    return numbers;
}
function advancedBubble (numbers2: number[], trulish: boolean){
    for (let i = 0; i < numbers2.length; i++){
        for (let j = i + 1; j < numbers2.length; j++){
            if(trulish){
                while(numbers2[i] < numbers2[j]){//does not work, comming back later on
                let tempValue = numbers2[j];
                numbers2[j] = numbers2[i];
                numbers2[i] = tempValue;
                }
            }
            else{
                while(numbers2[i] > numbers2[j]){//does not work, comming back later on
                let tempValue = numbers2[j];
                numbers2[j] = numbers2[i];
                numbers2[i] = tempValue;
                }
            }        
        }
    }
    return numbers2;
}
console.log(bubble([34, 12, 24, 9, 5]));
console.log(advancedBubble([34, 12, 24, 9, 5], false));