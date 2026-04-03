/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let n = 0;
        const stack = [];
        let cur = root;

        while (cur || stack.length) {
            while (cur) {
                stack.push(cur);
                cur = cur.left;
            }

            cur = stack.pop();
            n += 1;
            if (n === k) return cur.val;
            cur = cur.right;
        }
    }
}
