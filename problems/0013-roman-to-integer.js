var roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

/**
* @param {string} s
* @return {number}
*/
var romanToInt = function (s) {
  var num = 0;
  var cursor = 'I';
  var digits = s.split('').reverse();
  digits.forEach(digit => {
    if (roman[digit] >= roman[cursor]) {
      num += roman[digit];
      cursor = digit;
    } else {
      num -= roman[digit];
    }
  });
  return num;
};

console.log(romanToInt('III')); // => 3
console.log(romanToInt('IV')); // => 4
console.log(romanToInt('IX')); // => 9
console.log(romanToInt('LVIII')); // => 58
console.log(romanToInt('MCMXCIV')); // => 1994

// Runtime: 124 ms, faster than 98.48% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 40.3 MB, less than 29.59% of JavaScript online submissions for Roman to Integer.
