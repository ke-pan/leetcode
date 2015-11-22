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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) return []
  var result = [[root.val]];
  
  var queue = [];
  queue.push(root)
  
  while (true) {
    var level = [];
    while (queue.length !== 0) {
      var node = queue.shift();
      if (node.left) level.push(node.left)
      if (node.right) level.push(node.right)
    }
    if (level.length === 0) {
      break;
    } else {
      queue = level
      result.push(level.map(function(node) {return node.val}))
    }
  }
  
  return result.reverse(); 
};

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.right = new TreeNode(4)

console.log(levelOrderBottom(root))
