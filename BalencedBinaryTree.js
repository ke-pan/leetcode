/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  
  function helper(root) {
    var balanced, depth;
    if (root === null) {
      balanced = true;
      depth = 0;
    } else {
      var right = helper(root.right);
      var left = helper(root.left);
      balanced = right.balanced && left.balanced && Math.abs(left.depth - right.depth) <= 1;
      depth = Math.max(left.depth, right.depth) + 1
    }
    return {balanced, depth}
  }
  
  return helper(root).balanced;
};