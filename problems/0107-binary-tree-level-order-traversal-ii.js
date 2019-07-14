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

function writeStack(stack, level, val) {
  if (stack[level] === undefined) stack[level] = [];
  stack[level].push(val);
}

function writeStackFromTreeNode(stack, level, treeNode) {
  writeStack(stack, level, treeNode.val)
  if (treeNode.left !== null) writeStackFromTreeNode(stack, level + 1, treeNode.left)
  if (treeNode.right !== null) writeStackFromTreeNode(stack, level + 1, treeNode.right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) return [];
  var stack = [];
  writeStackFromTreeNode(stack, 0, root);
  return stack.reverse();
};

const tree1 = new TreeNode(3);
tree1.left = new TreeNode(9);
tree1.right = new TreeNode(20);
tree1.right.left = new TreeNode(15);
tree1.right.right = new TreeNode(7);
console.log(levelOrderBottom(tree1)); // => [[15,7], [9,20], [3]]

// Runtime: 52 ms, faster than 93.07% of JavaScript online submissions for Binary Tree Level Order Traversal II.
// Memory Usage: 34.9 MB, less than 36.25% of JavaScript online submissions for Binary Tree Level Order Traversal II.
