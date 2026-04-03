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

        arr.sort((a, b) => a - b);

        function triverse(node) {
            if (!node) return;

            arr.push(node.val);
            triverse(node.left);
            triverse(node.right);
        }

        return arr[k-1];
    }
}
