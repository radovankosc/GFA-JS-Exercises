const fs = require("fs");
let fileName = "C:\\Users\\simko\\OneDrive\\Desktop\\greenfox\\Karcoolka\\week-14\\NodeJS-MySQL\\UserData\\data.csv"
let content = fs.readFileSync(fileName, "utf-8").split("\n");//splited by line
for(let i = 1; i < 3; i++){ //starts from one,because 1th are names of columns   
    let words = content[i].split(",");
    let id = words[0];
    let prefix = words[1];
    let first_name = words[2];
    let last_name = words[3];
    let address = words[4];
    let height = words[5];
    let bitcoin_address = words[6];
    let color_preference = words[7];
    }    



//id,prefix,first_name,last_name,address,height,bitcoin_address,color_preference