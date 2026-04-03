class ListNode {
    /**
     * @constructor
     * @param {number} val
     */
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        this.left = new ListNode(0);
        this.right = new ListNode(0);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let node = this.cache.get(key);
        
        if (!node) return -1;

        this.remove(node);
        this.insert(node);

        const value = node.val.value;

        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const node = this.cache.get(key);

        if (node) {
            this.remove(node);
        } 

        const newNode = new ListNode({ key, value });
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.capacity) {
            const lruNode = this.left.next;
            this.remove(lruNode);
            this.cache.delete(lruNode.val.key);
        }
    }

    remove(node) {
        const prev = node.prev;
        const next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    insert(node) {
        const prev = this.right.prev;
        const next = this.right;

        prev.next = node;
        node.prev = prev;
        next.prev = node;
        node.next = next;
    }
}
