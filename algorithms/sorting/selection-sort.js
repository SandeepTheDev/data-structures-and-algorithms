function selectionSort(numbers) {
  let count = 0;
  while (count < numbers.length - 1) {
    let smallestIdx = count;
    for (let i = count; i < numbers.length; i++) {
      if (numbers[i] < numbers[smallestIdx]) {
        smallestIdx = i;
      }
    }

    let temp = numbers[count];
    numbers[count] = numbers[smallestIdx];
    numbers[smallestIdx] = temp;
    count++;
  }

  return numbers;
}

console.log(selectionSort([7, 3, 8, 9, 10, 1, 2, 7]));
