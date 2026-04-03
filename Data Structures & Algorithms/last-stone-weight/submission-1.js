class MaxHeap {
    constructor() {
        this.heap = new Array();
        this.heap.push(0);
    }

    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;

        while (i > 1 && this.heap[i] > this.heap[Math.floor(i / 2)]) {
            let tmp = this.heap[i];
            this.heap[i] = this.heap[Math.floor(i / 2)];
            this.heap[Math.floor(i / 2)] = tmp;
            i = Math.floor(i / 2);
        }
    }

    pop() {
        if (this.heap.length == 1) {
            // Normally we would throw an exception if heap is empty.
            return -1;
        }
        if (this.heap.length == 2) {
            return this.heap.pop();
        }

        let res = this.heap[1];
        // Move last value to root
        this.heap[1] = this.heap.pop();
        let i = 1;
        // Percolate down
        while (2 * i < this.heap.length) {
            if (2 * i + 1 < this.heap.length &&
                this.heap[2 * i + 1] > this.heap[2 * i] &&
                this.heap[i] < this.heap[2 * i + 1]) {
                // Swap right child
                let tmp = this.heap[i];
                this.heap[i] = this.heap[2 * i + 1];
                this.heap[2 * i + 1] = tmp;
                i = 2 * i + 1;
            } else if (this.heap[i] < this.heap[2 * i]) {
                // Swap left child
                let tmp = this.heap[i];
                this.heap[i] = this.heap[2 * i];
                this.heap[2 * i] = tmp;
                i = 2 * i;
            } else {
                break;
            }
        }

        return res;
    }

    getLength() {
        return this.heap.length;
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) { 
        const maxHeap = new MaxHeap();

        for (const stone of stones) {
            maxHeap.push(stone);
        }

        while (maxHeap.getLength() > 2) {
            const stone1 = maxHeap.pop();
            const stone2 = maxHeap.pop();

            const remaining = Math.abs(stone1 - stone2);
            if (remaining) {
                maxHeap.push(remaining);
            }
        }

        if (maxHeap.getLength() === 1) return 0; 

        return maxHeap.heap[1];
    }
}
