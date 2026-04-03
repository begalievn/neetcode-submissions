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

class MyLinkedList {
    constructor() {
        this.head = new ListNode(0);
        this.tail = new ListNode(0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addAtTail(node) {
        const next = this.tail;
        const prev = this.tail.prev;
        prev.next = node;
        next.prev = node;
        node.next = next;
        node.prev = prev;
    }

    pop() {
        if (this.head.next === this.tail) {
            return null;
        }
        const node = this.head.next;
        const next = node.next;
        this.head.next = next;
        next.prev = this.head;

        return node;
    }

    popNode(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
        node.prev = null;
        node.next = null;

        return node;
    }

    createNode(val) {
        const node = new ListNode(val);

        return node;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.list = new MyLinkedList();
        this.capacity = capacity;
        this.size = 0;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let node = this.map.get(key);
        if (!node) {
            return -1;
        }

        node = this.list.popNode(node);
        this.list.addAtTail(node);
        const value = node.val.value;

        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const node = this.map.get(key);

        if (node) {
            const poppedNode = this.list.popNode(node);
            poppedNode.val.value = value;
            this.list.addAtTail(poppedNode);
        } else {
            const newNode = this.list.createNode({ key, value });

            if (this.size < this.capacity) {
                this.list.addAtTail(newNode);
                this.size += 1;
            } else {
                const poppedNode = this.list.pop();
                this.map.delete(poppedNode.val.key);
                this.list.addAtTail(newNode);
            }

            this.map.set(key, newNode);
        }
    }
}
