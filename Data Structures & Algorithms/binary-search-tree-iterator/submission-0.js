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
class BSTIterator {
    /**
     * @constructor
     * @param {TreeNode} root
     */
    constructor(root) {
        this.queue = [];
        this.inorder(root);

    }

    inorder(root) {
        let stack = [];
        let cur = root;

        while (cur || stack.length) {
            if (cur) {
                stack.push(cur);
                cur = cur.left;
            } else {
                cur = stack.pop();
                this.queue.push(cur.val);
                cur = cur.right;
            }
        }
    }

    /**
     * @return {number}
     */
    next() {
        return this.queue.shift();
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.queue.length > 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
