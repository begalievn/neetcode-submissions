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
     * @return {void}
     */
    reorderList(head) {
        const nodesArr = [];
        
        let cur = head;
        while (cur) {
            nodesArr.push(cur);
            cur = cur.next;
        }

        cur = head;
        let l = 1;
        let r = nodesArr.length - 1;
        while (l <= r) {
            const rightNode = nodesArr[r];
            const leftNode = nodesArr[l];
            cur.next = rightNode;
            cur.next.next = r != l ? leftNode : null;
            cur = cur.next.next;
            l++;
            r--;
        }

        if (cur) cur.next = null;

        return head;
    }
}
