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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        function triverse(node, val) {
            if (!node) return false;

            val = val + node.val;
            if (!node.left && !node.right) {
                return targetSum === val;
            }

            return triverse(node.left, val) || triverse(node.right, val);
        }

        return triverse(root, 0);
    }
}
