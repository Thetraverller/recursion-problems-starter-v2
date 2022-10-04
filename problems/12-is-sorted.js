/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
//#m1
function isSorted(arr) {
  if (arr.length < 2) {
    return true
  }

  let i = arr.length -1

  if (arr[i] > arr[i-1]) {
   arr.pop()
   return isSorted(arr)
  } else {
    return false
  }
}

//#m2
// function isSorted(arr) {
//   if (arr.length < 2) {
//     return true;
//   }

//   const unsorted = arr.slice(1);

//   if (arr[0] < arr[1]) {
//     return isSorted(unsorted);
//   }

//   return false;
// }
//---------------
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
