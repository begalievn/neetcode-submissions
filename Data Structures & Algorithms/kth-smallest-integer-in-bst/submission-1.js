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
        const arr = [];

        triverse(root);

        function triverse(node) {
            if (!node) return;

            triverse(node.left);
            arr.push(node.val);
            triverse(node.right);
        }

        return arr[k-1];
    }
}
