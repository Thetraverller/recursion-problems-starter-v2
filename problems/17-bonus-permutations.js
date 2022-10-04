/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
function permutations(arr) {
  let perms = []

  if (arr.length === 0) {  //base step
    return [[]]
  }


  let firstEl = arr[0];
  let permsWithoutFirst = permutations(arr.slice(1))

  permsWithoutFirst.forEach(perm => {        //iterate thru array for diff arr[0] (first[el])
    for (let i = 0; i <= perm.length; i++) { //x2 iterate thru array
      let permWithFirst = [...perm.slice(0,i), firstEl, ...perm.slice(i)]
      perms.push(permWithFirst) // push what is before idx, first el, after idx // first el just moving through the array
    }
  })
return perms
}




console.log(permutations([1, 2])) // [[1, 2], [2, 1]]
console.log(permutations([1, 2, 3])) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]

                        console.log(permutations([1, 2, 3, 4]))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
