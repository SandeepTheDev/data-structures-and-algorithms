/**
 * Write a function that reverses a string. The input string is given as an array
 * of characters s.
 *
 * You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * input = ["h","e","l","l","o"]
 * output = ["o","l","l","e","h"]
 */

function reverseString(str) {
  var left = 0;
  var right = str.length - 1;
  while (left < right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }
}

reverseString(["H", "a", "n", "n", "a", "h"]);
