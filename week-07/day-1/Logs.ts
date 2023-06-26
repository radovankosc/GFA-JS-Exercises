// Read all data from 'log.txt'
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses
export {};
const fs = require("fs");
function uniqueIP(file: string) {
  try {
    let content: string = fs.readFileSync(file, "utf8");
    let arrayOfLines: string[] = content.split("\n");
    let arrayOfIPs: string[] = [];
    for (let i = 0; i < arrayOfLines.length; i++) {
      let singleIP: string = arrayOfLines[i].slice(27, -10);
      if (!arrayOfIPs.includes(singleIP)) {
        arrayOfIPs.push(singleIP);
      }
    }
    return arrayOfIPs;
  } catch {
    return "File not found.";
  }
}

function get_post(file: string) {
  try {
    let content: string = fs.readFileSync(file, "utf8");
    let arrayOfLines: string[] = content.split("\n");
    let arrayOfGets: string[] = [];
    for (let i = 0; i < arrayOfLines.length; i++) {
      let singleGetOrPost: string = arrayOfLines[i].slice(41);
      if (singleGetOrPost.indexOf("GET")) {
        arrayOfGets.push(singleGetOrPost);
      }
    }
    console.log(
      "Request ratio is " +
        arrayOfGets.length +
        " GET requests and " +
        (arrayOfLines.length - arrayOfGets.length) +
        " POST requests."
    );
  } catch {
    console.log("File not found.");
  }
}

console.log(uniqueIP("week-07/day-1/Inputs/logs.txt"));
get_post("week-07/day-1/Inputs/logs.txt");
// Write a function that returns the GET / POST request ratio
