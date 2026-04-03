class MinStack {
    constructor() {
        this.stack = [];
        this.sp = -1;
        this.minStack = [];
        this.msp = -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.sp += 1;
        this.stack[this.sp] = val;

        // compute new min based on previous min (if any)
        const currentMin = this.msp >= 0 ? this.minStack[this.msp] : val;
        const newMin = val <= currentMin ? val : currentMin;

        // push to minStack
        this.msp += 1;
        this.minStack[this.msp] = newMin;
    }

    /**
     * @return {void}
     */
    pop() {
        this.sp -= 1;
        this.msp -= 1;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.sp];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.msp];
    }
}
