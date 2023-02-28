/**
 * Create a function which takes an array of integers and sort it
 * Input: [7, 5, 8, 4, 1]
 * Output: [1, 4, 5, 7, 8]
 */

function bubbleSort(numbers) {
  let count = 0;
  while (count < numbers.length - 1) {
    for (let i = 0; i < numbers.length - count - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
      }
    }
    count++;
  }

  return numbers;
}

console.log(bubbleSort([7, 5, 8, 4, 1]));
