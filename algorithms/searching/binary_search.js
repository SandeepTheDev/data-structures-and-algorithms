function binary_search(arr, target) {
  // set first pointer at index 0
  var first = 0;
  // set second pointer at last index
  var last = arr.length - 1;

  while (first <= last) {
    // calculate midpoint index for given pointers (first & last)
    var midpoint = Math.floor((first + last) / 2);

    // if value at midpoint index is euqal to target return midpoint index
    if (arr[midpoint] === target) return midpoint;
    // if target is greater than the value at midpoint index move set first pointer midpoint + 1
    else if (target > arr[midpoint]) first = midpoint + 1;
    // if target is smaler than the value at midpoint index move set last pointer midpoint - 1
    else last = midpoint - 1;
  }

  // return NaN if the target is not found in array
  return NaN;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = binary_search(numbers, 6);
console.log(result);
