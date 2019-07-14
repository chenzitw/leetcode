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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if ((p === null) && (q === null)) return true;
  if (((p !== null) && (q === null)) || ((p === null) && (q !== null))) return false;
  if (p.val !== q.val) return false;
  return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};

const tree1a = new TreeNode(1);
tree1a.left = new TreeNode(2);
tree1a.right = new TreeNode(3);
const tree1b = new TreeNode(1);
tree1b.left = new TreeNode(2);
tree1b.right = new TreeNode(3);
console.log(isSameTree(tree1a, tree1b)); // => true

const tree2a = new TreeNode(1);
tree2a.left = new TreeNode(2);
const tree2b = new TreeNode(1);
tree2b.right = new TreeNode(2);
console.log(isSameTree(tree2a, tree2b)); // => false

// Runtime: 52 ms, faster than 81.24% of JavaScript online submissions for Same Tree.
// Memory Usage: 34 MB, less than 8.33% of JavaScript online submissions for Same Tree.
