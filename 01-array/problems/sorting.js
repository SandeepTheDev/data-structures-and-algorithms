/**
 * Create a function which takes an array of integers and sort it
 * Input: [7, 5, 8, 4, 1]
 * Output: [1, 4, 5, 7, 8]
 */

function sort(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let current = arr[j];
        for (let k = i; k < arr.length; k++) {
          if (current > arr[k]) {
            let temp = arr[k];
            arr[j] = temp;
            arr[k] = current;
            break;
          }
        }
      }
    }
  }
  return arr;
}

console.log(sort([7, 5, 8, 4, 1]));
