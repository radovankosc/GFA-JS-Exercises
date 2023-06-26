//Given a string, write a recursive (no loops) method which returns
//a new string with all the lowercase 'x' chars changed to 'y' chars.
export {};
function modifyString(myString: string): string {
  if (myString.length === 0) {
    return "";
  } else if (myString.charAt(myString.length - 1) === "x") {
    return modifyString(myString.slice(0, myString.length - 1)) + "y";
  }
  return (
    modifyString(myString.slice(0, myString.length - 1)) +
    myString.charAt(myString.length - 1)
  );
}
console.log(modifyString("patopsxchologx"));
