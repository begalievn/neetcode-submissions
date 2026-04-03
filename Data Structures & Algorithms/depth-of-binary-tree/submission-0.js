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
    maxDepth(root) {
        if (!root) return 0;

        if (!root.left && !root.right) return 1;

        const max = Math.max(this.maxDepth(root.left), this.maxDepth(root.right));

        return max + 1;
    }
}
