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

console.log(bubbleSort([7, 3, 8, 9, 10, 1, 2, 7]));
