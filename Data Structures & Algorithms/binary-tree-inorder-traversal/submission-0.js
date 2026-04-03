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
     * @return {number[]}
     */
    inorderTraversal(root) {
        if (!root) return [];

        const leftValues = this.inorderTraversal(root.left);
        const rightValues = this.inorderTraversal(root.right);

        return [...leftValues, root.val, ...rightValues];
    }
}
