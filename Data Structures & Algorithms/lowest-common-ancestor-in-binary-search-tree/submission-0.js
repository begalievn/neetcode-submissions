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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const stack = [root];
        const min = Math.min(p.val, q.val);
        const max = Math.max(p.val, q.val);

        while (stack.length) {
            const node = stack.pop();
            const val = node.val;

            if (val >= min && val <= max) return node;
            else if (val < min) {
                if (node.right) stack.push(node.right);
            } else {
                if (node.left) stack.push(node.left);
            }
        }
    }
}
