class ListNode {
    constructor(val = 0, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class MyStack {
    constructor() {
        this.head = new ListNode();
        this.tail = new ListNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const node = new ListNode(x);
        const prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev = node;
    }

    /**
     * @return {number}
     */
    pop() {
        const prev = this.tail.prev;
        if (prev === this.head) return null;

        prev.prev.next = this.tail;
        this.tail.prev = prev.prev;

        return prev.val;
    }

    /**
     * @return {number}
     */
    top() {
        const prev = this.tail.prev;

        return prev.val;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.head.next === this.tail;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
