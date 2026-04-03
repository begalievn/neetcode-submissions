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
        if (lists.length === 0) return null;

        while (lists.length > 1) {
            const mergedLists = [];

            for (let i = 0; i < lists.length; i += 2) {
                const list1 = lists[i];
                const list2 = lists[i+1] || null;
                mergedLists.push(this.mergeLists(list1, list2));
            }

            lists = mergedLists;
        }

        return lists[0];
    }

    mergeLists(list1, list2) {
        const dummy = new ListNode();
        let tail = dummy;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        if (list1) {
            tail.next = list1;
        }
        if (list2) {
            tail.next = list2;
        }

        return dummy.next;
    }
}
