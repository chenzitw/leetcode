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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

const tree1 = new TreeNode(3);
tree1.left = new TreeNode(9);
tree1.right = new TreeNode(20);
tree1.right.left = new TreeNode(15);
tree1.right.right = new TreeNode(7);
console.log(maxDepth(tree1)); // => 3

// Runtime: 60 ms, faster than 83.55% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 37.2 MB, less than 20.14% of JavaScript online submissions for Maximum Depth of Binary Tree.
