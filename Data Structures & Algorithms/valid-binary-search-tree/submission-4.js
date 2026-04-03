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
    isValidBST(root) {
        return this.valid(root, -Number.Infinity, Number.Infinity);
    }

    valid(node, left, right) {
        if (!node) return true;

        if (node.val >= right || node.val <= left) return false;

        return this.valid(node.left, left, node.val) && this.valid(node.right, node.val, right);
    }
}
