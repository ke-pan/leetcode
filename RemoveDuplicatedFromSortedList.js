/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null) {
      return null
    }
    
    var node = head
    
    while (head.next) {
      if (head.next.val === head.val) {
        head.next = head.next.next
      } else {
        head = head.next
      }
    }
    
    return node
};