/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3)); // => [2, 2]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // => [0, 1, 3, 0, 4]

// Runtime: 52 ms, faster than 88.28% of JavaScript online submissions for Remove Element.
// Memory Usage: 33.8 MB, less than 51.63% of JavaScript online submissions for Remove Element.
