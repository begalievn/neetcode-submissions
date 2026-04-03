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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let res = 0;

        function triverse(node) {
            if (!node) return 0;

            const leftVal = triverse(node.left);
            const rightVal = triverse(node.right);
            const max = Math.max(leftVal, rightVal);

            res = Math.max(res, leftVal + rightVal + 1);

            return max + 1;
        }

        triverse(root);

        return res ? res - 1 : 0;
    }
}
