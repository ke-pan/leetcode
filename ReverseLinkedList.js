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
var reverseList = function(head) {
  if (head === null) {
    return null;
  }
  var prev = null;
  
  while(head.next) {
    var temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  
  head.next = prev;
  
  return head;
  
};