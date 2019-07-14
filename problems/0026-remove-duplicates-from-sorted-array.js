/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    var num = nums.shift();
    var isUnique = true;
    for (var j = len - i - 1; j < nums.length; j++) {
      if (num === nums[j]) {
        isUnique = false;
        j = nums.length;
      }
    }
    if (isUnique) nums.push(num);
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2])); // => [1, 2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // => [0, 1, 2, 3, 4]

// Runtime: 228 ms, faster than 5.54% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 37.2 MB, less than 59.86% of JavaScript online submissions for Remove Duplicates from Sorted Array.
