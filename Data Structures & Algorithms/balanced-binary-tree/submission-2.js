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
     * @return {boolean}
     */
    isBalanced(root) {
        let res = true;

        function triverse(node) {
            if (!node) return 0;

            const left = triverse(node.left);
            const right = triverse(node.right);

            if (Math.abs(left - right) > 1) {
                res = false;
            }

            return Math.max(left, right) + 1;
        }

        triverse(root);

        return res;
    }
}
