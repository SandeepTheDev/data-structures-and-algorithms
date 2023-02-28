/**
 * Write a function that returns the first recurring character
 * Input: [2,4,3,2,1,3,4]
 * Output: 2
 *
 * Input: [5,1,1,7,8,7,8]
 * Output: 1
 *
 * Input: [6,1,8,9]
 * Output: undefined
 */

function firstRecurringCharacter(array) {
  const obj = {};
  for (let element of array) {
    if (!obj[element]) {
      obj[element] = element;
    } else {
      return element;
    }
  }

  return undefined;
}

const result = firstRecurringCharacter([6, 1, 8, 9]);
console.log(result);
