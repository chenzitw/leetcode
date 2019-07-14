/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if ((i !== j) && ((nums[i] + nums[j]) === target)) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // => [0, 1]

// Runtime: 172 ms, faster than 15.94% of JavaScript online submissions for Two Sum.
// Memory Usage: 34.9 MB, less than 43.08% of JavaScript online submissions for Two Sum.
