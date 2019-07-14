/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var position = digits.length - 1;
  var plusOne = true;
  while ((position >= 0) && plusOne) {
    digits[position] += 1;
    plusOne = false;
    if (digits[position] >= 10) {
      plusOne = true;
      digits[position] -= 10;
      position -= 1;
    }
  }
  if ((position === -1) && plusOne) {
    digits = [1].concat(digits);
  }
  return digits;
};

console.log(plusOne([1, 2, 3])); // => [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // => [4, 3, 2, 2]
console.log(plusOne([9, 9, 9, 9])); // => [1, 0, 0, 0, 0]

// Runtime: 60 ms, faster than 54.19% of JavaScript online submissions for Plus One.
// Memory Usage: 33.7 MB, less than 88.57% of JavaScript online submissions for Plus One.
