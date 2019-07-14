/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var isNegative = (x < 0);
  var digits = x.toString().split('');
  var target = [];
  if (isNegative) {
    digits = digits.slice(1);
    target.push('-');
  }
  var num = Number.parseInt(digits.reverse().join(''), 10);
  if ((num <= (Math.pow(2, 31) - 1)) && (num >= (-(Math.pow(2, 31))))) {
    target = target.concat(num.toString().split(''));
  } else {
    target.push('0');
  }
  target = target.join('');
  return Number.parseInt(target, 10);
};

console.log(reverse(123)); // => 321
console.log(reverse(-123)); // => -321
console.log(reverse(120)); // => 21

// Runtime: 80 ms, faster than 61.28% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 36.3 MB, less than 10.15% of JavaScript online submissions for Reverse Integer.