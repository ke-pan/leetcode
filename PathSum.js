/**
 * Definition for a binary tree node.
 */
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
 
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  function helper(node, pathSum, sum) {
    var newPathSum = pathSum + node.val
    if (node.left === null && node.right === null){
      if (sum === newPathSum) {
        return true
      }
      else return false
    } else if (node.left === null) {
      return helper(node.right, newPathSum, sum)
    } else if (node.right === null) {
      return helper(node.left, newPathSum, sum)
    } else {
      return helper(node.left, newPathSum, sum) ||
             helper(node.right, newPathSum, sum)
    }
  }
  
  if (root === null) return false;
  return helper(root, 0, sum)
};

var tree = new TreeNode(1);
tree.left = new TreeNode(-2);
tree.left.left = new TreeNode(1);
tree.left.left.left = new TreeNode(-1);
tree.left.right = new TreeNode(3);
tree.right = new TreeNode(-3);
tree.right.left = new TreeNode(-2);

console.log(hasPathSum(tree, -3))
