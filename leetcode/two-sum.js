/**
 * Given an array of integers numbers and an integer target, return indices of the two
 * numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not
 * use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [0,1]
 *
 * Input: numbers = [3,2,4], target = 6
 * Output: [1,2]
 */

function twoSums(numbers, target) {
  const obj = {};
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in obj) {
      return [obj[numbers[i]], i];
    }
    obj[target - numbers[i]] = i;
  }
}

const result = twoSums([3, 2, 4], 6);
console.log(result);
