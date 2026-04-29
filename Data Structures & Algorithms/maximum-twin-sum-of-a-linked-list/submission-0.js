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
     * @return {number}
     */
    pairSum(head) {
        let max = 0;
        let slow = head;
        let fast = head;
        const stack = [];

        while (fast && fast.next) {
            stack.push(slow);
            slow = slow.next;
            fast = fast.next.next;
        }

        let twin2 = slow;

        while (twin2) {
            const twin1 = stack.pop();
            max = Math.max(twin1.val + twin2.val, max);
            twin2 = twin2.next;
        }

        return max;
    }
}
