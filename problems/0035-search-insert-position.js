/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

console.log(searchInsert([1,3,5,6], 5)); // => 2

console.log(searchInsert([1,3,5,6], 2)); // => 1

console.log(searchInsert([1,3,5,6], 7)); // => 4

console.log(searchInsert([1,3,5,6], 0)); // => 0

// Runtime: 60 ms, faster than 37.62% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 34.3 MB, less than 44.21% of JavaScript online submissions for Search Insert Position.
