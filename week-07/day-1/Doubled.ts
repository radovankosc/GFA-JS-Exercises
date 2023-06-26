// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// //missing try catch blog :
// // If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file
export {};
const fs = require("fs"); //What does it do????
function decryptDoubled(fileName: string) {
  try {
    let decrypted: string = fs.readFileSync(fileName, "utf8");
    let decryptedLength: number = fs.readFileSync(fileName, "utf8").length;

    //-------------------------------------------------------------------------
    //UNSYNCHRONISED FCE does not work in this case....
    //   for (let i = 0; i < decryptedLength; i += 2) {
    //     fs.appendFile(
    //       "week-07/day-1/Outputs/duplicated-chars.txt",
    //       decrypted.charAt(i),
    //       (err: any) => {
    //         console.log(i);
    //         if (err) throw new Error("File does not exists");
    //       }
    //     );
    //   }
    //   console.log("For");
    // }
    // decryptDoubled("week-07/day-1/Inputs/doubled.txt");
    //---------------------------------------------------------------------------

    //SYNCHRONISED function works in this case:

    for (let i = 0; i < decryptedLength; i += 2) {
      fs.appendFileSync(
        "week-07/day-1/Outputs/duplicated-chars.txt",
        decrypted.charAt(i)
      );
    }
  } catch {
    console.log("Cannot find the file:" + fileName);
  }
}
decryptDoubled("week-07/day-1/Inputs/douubled.txt");
