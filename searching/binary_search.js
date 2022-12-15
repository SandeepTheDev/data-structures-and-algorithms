function binary_search(arr, target) {
  var first = 0;
  var last = arr.length - 1;

  while (first <= last) {
    var midpoint = Math.floor((first + last) / 2);

    if (arr[midpoint] === target) return midpoint;
    else if (arr[midpoint] < target) first = midpoint + 1;
    else last = midpoint - 1;
  }

  return NaN;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = binary_search(numbers, 8);
console.log(result);
