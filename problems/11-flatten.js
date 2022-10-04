/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here


// function flatten(arr) {
// let flattened = [];

// if (arr.length === 0) {
//   return flattened;
// }

// let el1 = arr[0];
// let unflattened = [...arr.slice(1)];

// if (Array.isArray(el1)) {
//   flattened.push(...flatten(el1), ...flatten(unflattened));
// } else {
//   flattened.push(el1, ...flatten(unflattened));
// }

// return flattened;
// }
function flatten(arr) {
  let flattened = []

  if (arr.length === 0) {  //base case
    return flattened
  }

  let el1 = arr[0]
  let unflat = [...arr.slice(1)] //rest of the array will be flattened

  if(Array.isArray(el1)) {
    flattened.push(...flatten(el1), ...flatten(unflat))
  } else {
    flattened.push(el1, ...flatten(unflat))
  }

  return flattened
}
//----------------
console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
