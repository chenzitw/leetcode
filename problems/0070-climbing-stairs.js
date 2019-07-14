/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  var last = 0;
  var current = 1;
  for (var i = 0; i < n; i ++) {
    current += last;
    last = current - last;
  }
  return current;
};

console.log(climbStairs(1)); // => 1
console.log(climbStairs(2)); // => 2
console.log(climbStairs(3)); // => 3
console.log(climbStairs(4)); // => 5
console.log(climbStairs(5)); // => 8
console.log(climbStairs(6)); // => 13

// Runtime: 56 ms, faster than 60.55% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 33.8 MB, less than 83.65% of JavaScript online submissions for Climbing Stairs.