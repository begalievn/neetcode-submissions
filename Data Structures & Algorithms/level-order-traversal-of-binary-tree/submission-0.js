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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        const res = [];
        const queue = [root];
        let curLevel = 0;

        while (queue.length) {
            res.push([]);
            const len = queue.length;

            for (let i = 0; i < len; i++) {
                const node = queue.shift();
                res[curLevel].push(node.val);

                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }

            curLevel++;
        }

        return res;
    }
}
