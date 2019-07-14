/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var writer = (m + n) - 1;
  var p1 = m - 1;
  var p2 = n - 1;
  while (writer >= 0) {
    var num = (p1 >= 0) ? nums1[p1] : -Infinity;
    if ((p2 >= 0) && (nums2[p2] > num)) num = nums2[p2];

    // console.log(p1, nums1[p1], p2, nums2[p2], num);
    if (nums1[p1] === num) {
      nums1[p1] = 0;
      nums1[writer] = num;
      writer -= 1;
      p1 -= 1;
    }
    if (nums2[p2] === num) {
      nums1[writer] = num;
      writer -= 1;
      p2 -= 1;
    }
  }
};

const arr1 = [1, 2, 3, 0, 0, 0];
merge(arr1, 3, [2, 5, 6], 3);
console.log(arr1); // => [1, 2, 2, 3, 5, 6]

const arr2 = [0];
merge(arr2, 0, [1], 1);
console.log(arr2); // => [1, 2, 2, 3, 5, 6]

const arr3 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
merge(arr3, 6, [1, 2, 2], 3);
console.log(arr3); // => [-1,0,0,1,2,2,3,3,3]

// Runtime: 60 ms, faster than 60.03% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 33.9 MB, less than 58.86% of JavaScript online submissions for Merge Sorted Array.
