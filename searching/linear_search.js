function linear_search(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    // return the index position of the target if found in array
    if (arr[i] === target) return i;
  }
  // return NaN if the target is not found in array
  return NaN;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = linear_search(numbers, 4);
console.log(result);
