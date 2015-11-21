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

  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
 }

var isSymmetric = function(root) {
  // iteratively
  function helper(arr, head) {
    // console.log(arr, head);
    var tail = arr.length - 1;
    for (;head < tail; head++, tail--) {
      if (arr[head] && arr[tail] && arr[head].val != arr[tail].val ||
          arr[head] && !arr[tail] || !arr[head] && arr[tail])
        return false;
    }
    return true;
  }
  
  var arr = [];
  var head = 0;
  arr.push(root)
  while(head < arr.length) {
    // console.log(head, arr.length)
    if (!helper(arr, head)) return false;
    var l = arr.length
    for (; head < l; head++) {
      if (arr[head]) {
        arr.push(arr[head].left)
        arr.push(arr[head].right)
      }
    }
  }
  return true;
};

var isSymmetric = function(root) {
  // recursively
  function helper(left, right) {
    if (left === null && right === null) return true
    if (left === null || right === null || left.val !== right.val) return false
    return helper(left.left, right.right) && helper(left.right, right.left)
  }
  
  if (root === null) return true
  return helper(root.left, root.right)
} 

t1 = new TreeNode(1)
t1.left = new TreeNode(2)
t1.right = new TreeNode(2)

console.log(isSymmetric(t1))