var CloseBrackets = [')', '}', ']'];
var openBracketOfCloseBracket = {
  ')': '(',
  '}': '{',
  ']': '[',
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    if (CloseBrackets.includes(s[i])) {
      var lastOne = stack.pop();
      if (lastOne !== openBracketOfCloseBracket[s[i]]) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return (stack.length === 0);
};

console.log('()'); // => true
console.log('()[]{}'); // => true
console.log('(]'); // => false
console.log('([)]'); // => false
console.log('{[]}'); // => true

// Runtime: 52 ms, faster than 88.61% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 33.9 MB, less than 70.75% of JavaScript online submissions for Valid Parentheses.
