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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
        if (!root) return 0;

        const left = this.rangeSumBST(root.left, low, high);
        const right = this.rangeSumBST(root.right, low, high);

        const curVal = (root.val >= low && root.val <= high) ? root.val : 0;

        return curVal + left + right;
    }
}
