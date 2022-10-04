/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


// your code here
//#m1
let range = (min, max) => {

  if (max <= min) {    // base
    return []
  }
  let countArr = range(min + 1, max)
  // console.log(countArr)  // ^^ fills in new array from the max value
  return [min, ...countArr]
}
//#m2
// let range = (min, max) => {
//   if (max < min) {
//     return []
//   }
//   let countArr = range(min + 1, max)
//   console.log(countArr)
//   countArr.unshift(min)
//   return countArr
// }
//------------------
console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
