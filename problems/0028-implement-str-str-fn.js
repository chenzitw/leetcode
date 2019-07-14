/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr('hello', 'll')); // => 2
console.log(strStr('aaaaa', 'bba')); // => -1

// Runtime: 48 ms, faster than 96.12% of JavaScript online submissions for Implement strStr().
// Memory Usage: 33.8 MB, less than 87.37% of JavaScript online submissions for Implement strStr().
