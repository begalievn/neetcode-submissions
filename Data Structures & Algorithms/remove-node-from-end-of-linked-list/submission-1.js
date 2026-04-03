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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0;
        let cur = head;

        while (cur) {
            length++;
            cur = cur.next;
        }

        if (n === length) {
            head = head.next;
            
            return head;
        }

        let curLen = 0;
        cur = head;

        while (cur) {
            curLen += 1;

            if (length - curLen === n) {
                if (cur.next) {
                    cur.next = cur.next.next;
                    break;
                }
            }

            cur = cur.next;
        }

        return head;
    }
}
