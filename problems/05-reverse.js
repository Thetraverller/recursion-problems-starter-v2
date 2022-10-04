/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("cat"); // "tac"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here
// function reverse(string) {
//   let i = string.length - 1

//   if (string.length === 0) {
//     return ""
//   }

//   return string[i] + reverse(string.slice(0,i))
// }

function reverse(str) {
  let i = str.length - 1

  if (str.length === 0) {
    return ""
  }
  return str[i] + reverse(str.slice(0,i))
}
//-------------------------------
console.log(reverse("house")); // "esuoh"
console.log(reverse("cat")); // "tac"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
