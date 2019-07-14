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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null;
  var pointer = head;
  while (pointer.next !== null) {
    if (pointer.val === pointer.next.val) {
      pointer.next = pointer.next.next;
    } else {
      pointer = pointer.next;
    }
  }
  return head;
};

const a = new ListNode(1);
a.next = new ListNode(1);
a.next.next = new ListNode(2);
const b = new ListNode(1);
b.next = new ListNode(1);
b.next.next = new ListNode(2);
b.next.next.next = new ListNode(3);
b.next.next.next.next = new ListNode(3);

console.log(deleteDuplicates(a)); // => 1->2
console.log(deleteDuplicates(b)); // => 1->2->3

// Runtime: 60 ms, faster than 94.29% of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 35.5 MB, less than 87.24% of JavaScript online submissions for Remove Duplicates from Sorted List.
