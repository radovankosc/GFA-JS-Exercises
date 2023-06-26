// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
export{}
var input = 5;
var inputB = 10;
function printParams (x: number, y: number){
    console.log("Parameters of this function are: " + x + " and " + y + "!");
}
printParams(input, inputB);

//another olution
function printParams2(input1: any, input2: any, ...input3: any): void {
    console.log(input1);
    console.log(input2);
    console.log(input3);
  }
  
  printParams2(1, "h", 3);