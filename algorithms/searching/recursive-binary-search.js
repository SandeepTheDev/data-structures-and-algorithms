// return 'true' if item found is in array else return 'false'
function recursive_binary_search(arr, target) {
  if (arr.length === 0) {
    return false;
  } else {
    var first = 0;
    var last = arr.length - 1;

    var midpoint = Math.floor((first + last) / 2);

    if (arr[midpoint] === target) {
      return true;
    } else if (target > arr[midpoint]) {
      return recursive_binary_search(arr.slice(midpoint + 1), target);
    } else {
      return recursive_binary_search(arr.slice(0, midpoint - 1), target);
    }
  }
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = recursive_binary_search(numbers, -1);
console.log(result);
