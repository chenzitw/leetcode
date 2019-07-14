/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return ((x >= 0) && (x === Number.parseInt(x.toString().split('').reverse().join(''), 10)));
};

console.log(isPalindrome(121)); // => true
console.log(isPalindrome(-121)); // => false
console.log(isPalindrome(10)); // => false

// Runtime: 208 ms, faster than 63.06% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 45.7 MB, less than 51.67% of JavaScript online submissions for Palindrome Number.
