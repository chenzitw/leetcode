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

var isSameMirrorTree = function(p, q) {
  if ((p === null) && (q === null)) return true;
  if (((p !== null) && (q === null)) || ((p === null) && (q !== null))) return false;
  if (p.val !== q.val) return false;
  return (isSameMirrorTree(p.left, q.right) && isSameMirrorTree(p.right, q.left));
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isSameMirrorTree(root.left, root.right);
};

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.left.left = new TreeNode(3);
tree1.left.right = new TreeNode(4);
tree1.right = new TreeNode(2);
tree1.right.left = new TreeNode(4);
tree1.right.right = new TreeNode(3);
console.log(isSymmetric(tree1)); // => true

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.left.right = new TreeNode(3);
tree2.right = new TreeNode(2);
tree2.right.right = new TreeNode(3);
console.log(isSymmetric(tree2)); // => false

// Runtime: 60 ms, faster than 81.17% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 35.5 MB, less than 92.86% of JavaScript online submissions for Symmetric Tree.
