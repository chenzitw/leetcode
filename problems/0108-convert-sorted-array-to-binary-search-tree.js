/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length <= 0) return null;
  var mid = Math.floor(nums.length / 2);
  var treeNode = new TreeNode(nums[mid]);
  if (mid > 0) treeNode.left = sortedArrayToBST(nums.slice(0, mid));
  if (mid < (nums.length - 1)) treeNode.right = sortedArrayToBST(nums.slice(mid + 1));
  return treeNode;
};

console.log(sortedArrayToBST([-10,-3,0,5,9])); // => [0,-3,9,-10,null,5]

// Runtime: 64 ms, faster than 87.59% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 37.8 MB, less than 35.32% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
