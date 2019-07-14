/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var pointer = 0;
  var score = nums[pointer];
  var highest = nums[pointer];
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > (nums[i] + score)) {
      pointer = i;
      score = nums[i];
      // console.log('=', nums[i]);
    } else {
      score += nums[i];
      // console.log('+', nums[i]);
    }
    if (score > highest) {
      highest = score;
      // console.log('H', highest);
    }
  }
  return highest;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // => 6
console.log(maxSubArray([-2,1])); // => 1
console.log(maxSubArray([1,2])); // => 3

// Runtime: 52 ms, faster than 96.42% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 35.1 MB, less than 82.32% of JavaScript online submissions for Maximum Subarray.