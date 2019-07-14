/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var mergeTwoLists = function(l1, l2) {
  var container = {
      next: null,
  };
  var pc = container;
  var p1 = l1;
  var p2 = l2;
  while ((p1 !== null) || (p2 !== null)) {
      if ((p2 === null) && (p1 !== null)) {
          pc.next = p1;
          p1 = null;
      } else if ((p1 === null) && (p2 !== null)) {
          pc.next = p2;
          p2 = null;
      } else {
          if (p1.val < p2.val) {
              pc.next = new ListNode(p1.val);
              pc = pc.next;
              p1 = p1.next;
          } else if (p1.val > p2.val) {
              pc.next = new ListNode(p2.val);
              pc = pc.next;
              p2 = p2.next;
          } else {
              pc.next = new ListNode(p1.val);
              pc = pc.next;
              p1 = p1.next;
              pc.next = new ListNode(p2.val);
              pc = pc.next;
              p2 = p2.next;
          }
      }
  }
  return container.next;
};

const a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(4);
const b = new ListNode(1);
b.next = new ListNode(3);
b.next.next = new ListNode(4);
console.log(mergeTwoLists(a, b)); // => 1->1->2->3->4->4

// Runtime: 60 ms, faster than 87.77% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 35.6 MB, less than 49.50% of JavaScript online submissions for Merge Two Sorted Lists.
