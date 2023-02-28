/**
 * Write a function that merge two sorted array of integers
 * Input: arr1: [4, 7, 8, 9, 12] arr2: [5, 8, 9, 10]
 * Output: [4, 5, 7, 8, 8, 9, 10, 12]
 */

function mergeSortedArray(array1, array2) {
  const mergedArray = [];
  let array1Idx = 0;
  let array2Idx = 0;

  while (array1[array1Idx] || array2[array2Idx]) {
    const array1Item = array1[array1Idx];
    const array2Item = array2[array2Idx];

    if (array1Item && array2Item) {
      if (array1Item < array2Item) {
        mergedArray.push(array1Item);
        array1Idx++;
      } else {
        mergedArray.push(array2Item);
        array2Idx++;
      }
    } else {
      if (array1Item) {
        mergedArray.push(array1Item);
        array1Idx++;
      }

      if (array2Item) {
        mergedArray.push(array2Item);
        array2Idx++;
      }
    }
  }

  return mergedArray;
}

const result = mergeSortedArray([4, 7, 8, 9, 12], [5, 8, 9, 10]);
console.log(result);
