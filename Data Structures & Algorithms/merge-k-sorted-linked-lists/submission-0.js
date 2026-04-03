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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const arr = [];

        for (const list of lists) {
            let cur = list;

            while (cur) {
                arr.push(cur);
                cur = cur.next;
            }
        }

        arr.sort((a, b) => a.val - b.val);

        const dummy = new ListNode(0);
        let tail = dummy;

        for (const node of arr) {
            tail.next = node;
            tail = node;
        }

        return dummy.next;
    }
}
