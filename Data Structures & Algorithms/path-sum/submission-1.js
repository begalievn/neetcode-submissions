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
        let res = false;

        function triverse(node, val) {
            if (!node) return;
            if (!node.left && !node.right) {
                if (val + node.val === targetSum) {
                    res = true;
                }
                return;
            }
            node.left && triverse(node.left, val + node.val);
            node.right && triverse(node.right, val + node.val);
        }

        triverse(root, 0);

        return res;
    }
}
