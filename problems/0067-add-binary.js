/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // return (Number.parseInt(a, 2) + Number.parseInt(b, 2)).toString(2); // overflow
  var pa = a.length - 1;
  var pb = b.length - 1;
  var carry = false;
  var stack = [];
  while (carry || (pa >= 0) || (pb >= 0)) {
    var num = 0;
    if (carry) num++;
    if (a[pa] === '1') num++;
    if (b[pb] === '1') num++;
    carry = (num >= 2) ? true : false;
    if (carry) num -= 2;
    pa--;
    pb--;
    stack.push(num);
    // improvement 1 begin
    if (!carry) {
      if ((pa >= 0) && (pb < 0)) {
        return a.slice(0, pa + 1).concat(stack.reverse().join(''));
      }
      if ((pb >= 0) && (pa < 0)) {
        return b.slice(0, pb + 1).concat(stack.reverse().join(''));
      }
    }
    // improvement 1 end
  }
  return stack.reverse().join('');
};

console.log(addBinary('11', '1')); // => '100'
console.log(addBinary('1010', '1011')); // => '10101'
console.log(addBinary('1', '111111111111111111110')); // => '111111111111111111111'

// Original
// Runtime: 60 ms, faster than 88.60% of JavaScript online submissions for Add Binary.
// Memory Usage: 35.8 MB, less than 42.32% of JavaScript online submissions for Add Binary.

// With improvement 1
// Runtime: 48 ms, faster than 99.59% of JavaScript online submissions for Add Binary.
// Memory Usage: 35.8 MB, less than 37.72% of JavaScript online submissions for Add Binary.
