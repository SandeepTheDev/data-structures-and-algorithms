/**
 * Write a function that merge two sorted array of integers
 * Input: arr1: [4, 7, 8, 9, 12] arr2: [5, 8, 9, 10]
 * Output: [4, 5, 7, 8, 8, 9, 10, 12]
 */

function mergeSortedArray(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    console.log(arr1Item, "<", arr2Item, arr1Item < arr2Item);
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
}

const result = mergeSortedArray([4, 7, 8, 9, 12], [5, 8, 9, 10]);
console.log(result);
