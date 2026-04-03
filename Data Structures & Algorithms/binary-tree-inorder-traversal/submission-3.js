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
        const res = [];
        
        function traverse(node) {
            if (!node) return;

            traverse(node.left);
            res.push(node.val);
            traverse(node.right);
        }

        traverse(root);

        return res;
    }
}
