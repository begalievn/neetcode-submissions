/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head, prev = null) {
        if (!head) return head;

        const next = head.next;
        head.next = prev;

        if (!next) return head;

        return this.reverseList(next, head);
    }
}
