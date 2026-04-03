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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) return null;

        if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else {
            console.log({
                'rootVal': root.val,
                'key': key,
            });

            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            } else {
                const minNode = this.minValueNode(root.right);
                console.log('minNode', minNode);
                root.val = minNode.val;
                root.right = this.deleteNode(root.right, minNode.val);
            }
        }

        console.log(key);

        return root;
    }

    findMinValue(root) {
        if (!root) return null;

        if (!root.left) return root.val;

        return this.findMinValue(root.left);
    }

    minValueNode(root) {
        let curr = root;
        while (curr != null && curr.left != null) {
            curr = curr.left;
        }
        return curr;
    }
}
