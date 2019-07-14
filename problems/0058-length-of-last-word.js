/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var lastWord = s.split(' ').filter(word => word !== '').pop() || '';
  return lastWord.length;
};

console.log(lengthOfLastWord('Hello World')); // => 5

// Runtime: 52 ms, faster than 83.84% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 33.8 MB, less than 77.20% of JavaScript online submissions for Length of Last Word.
