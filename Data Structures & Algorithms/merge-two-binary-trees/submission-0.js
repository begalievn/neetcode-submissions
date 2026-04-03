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
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {TreeNode}
     */
    mergeTrees(root1, root2) {
        function merge(node1, node2) {
            if (!node1 && !node2) return null;
            if (!node1) {
                return node2;
            } 
            if (!node2) {
                return node1;
            }

            const left = merge(node1.left, node2.left);
            const right = merge(node1.right, node2.right);

            node1.left = left;
            node1.right = right;
            node1.val = node1.val + node2.val;

            return node1;
        }

        return merge(root1, root2);
    }
}
