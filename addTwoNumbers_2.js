/**
 * You are given two linked lists representing two non-negative numbers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var helper = function(l1, l2, l, c) {
  if (l1 === null && l2 === null && c === 0) {
    return;
  }
  var l1Next, l2Next,
      val,
      newC = 0;

  if (l1 === null && l2 === null) {
    val = c;
    l1Next = null;
    l2Next = null;
  } else if (l1 === null) {
    val = l2.val + c;
    l1Next = null;
    l2Next = l2.next;
  } else if (l2 === null) {
    val = l1.val + c;
    l1Next = l1.next;
    l2Next = null;
  } else {
    val = l1.val + l2.val + c;
    l1Next = l1.next;
    l2Next = l2.next;
  }

  if (val >= 10) {
    val = val - 10;
    newC = 1;
  } else {
    val = val;
  }

  var lNext = new ListNode(val);
  l.next = lNext;

  return helper(l1Next, l2Next, lNext, newC);

}
var addTwoNumbers = function(l1, l2) {
  var head = new ListNode(0);
  helper(l1, l2, head, 0);
  return head.next;
};
