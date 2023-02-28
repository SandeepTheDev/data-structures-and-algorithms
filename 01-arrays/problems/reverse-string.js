/**
 * Create a function that reverses a string
 * Input: Hello World!
 * Output: !dlroW olleH
 */

function reverseStr(string) {
  let str = "";
  for (let i = string.length - 1; i >= 0; i--) {
    str = str + string[i];
  }

  return str;
}

const result = reverseStr("Hello World!");
console.log(result);
