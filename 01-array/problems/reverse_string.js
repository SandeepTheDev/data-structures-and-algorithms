/**
 * Create a function that reverses a string
 * Input: Hello World!
 * Output: !dlroW olleH
 */

function reverseStr(str) {
  if (typeof str === "string" && str.length > 0) {
    const splittedStr = str.split("");
    const reverse = [];
    for (let i = splittedStr.length - 1; i >= 0; i--) {
      reverse.push(splittedStr[i]);
    }
    return reverse.join("");
  } else {
    return "Please pass a valid string...";
  }
}

const result = reverseStr("Hello World!");
console.log(result);
