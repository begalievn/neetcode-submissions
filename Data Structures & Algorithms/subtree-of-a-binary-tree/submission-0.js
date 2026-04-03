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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root && !subRoot) return true;
        if (!root || !subRoot) return false;

        const stack = [];

        if (root) stack.push(root);

        while (stack.length) {
            const current = stack.pop();
            if (current.val === subRoot.val) {
                const isSame = this.sameTree(current, subRoot);
                if (isSame) {
                    return true;
                }
            }

            if (current.right) stack.push(current.right);
            if (current.left) stack.push(current.left);
        }

        return false;
    }

    sameTree(root1, root2) {
        if (!root1 && !root2) return true;

        if ((!root1 || !root2) || (root1.val !== root2.val)) return false;

        return this.sameTree(root1.left, root2.left) && this.sameTree(root1.right, root2.right);
    }
}
