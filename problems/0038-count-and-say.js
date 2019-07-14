/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  var stack = [1];
  for (let i = 1; i < n; i++) {
    var counter = 1;
    var digit = stack[0];
    var nextStack = [];
    for (let j = 1; j < stack.length; j++) {
      if (digit === stack[j]) {
        counter += 1;
      } else {
        nextStack.push(counter);
        nextStack.push(digit);
        counter = 1;
        digit = stack[j];
      }
    }
    nextStack.push(counter);
    nextStack.push(digit);
    stack = nextStack;
  }
  return stack.join('');
};


console.log(countAndSay(1)); // => '1'
console.log(countAndSay(4)); // => '1211'

// Runtime: 60 ms, faster than 66.15% of JavaScript online submissions for Count and Say.
// Memory Usage: 35 MB, less than 88.32% of JavaScript online submissions for Count and Say.
