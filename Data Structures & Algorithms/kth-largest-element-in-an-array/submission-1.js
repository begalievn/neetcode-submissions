class Heap {
    constructor() {
        this.heap = new Array();
        this.heap.push(0);
    }

    heapify(arr) {
        arr.push(arr[0]);

        this.heap = arr;
        let cur = Math.floor((this.heap.length - 1) / 2);

        while (cur > 0) {
            let i = cur;
            this.percolateDown(i);
            cur--;
        }
    }

    pop() {
        if (this.heap.length === 1) {
            return;
        }
        if (this.heap.length === 2) {
            return this.heap.pop();
        }

        let res = this.heap[1];
        this.heap[1] = this.heap.pop();

        let i = 1;
        this.percolateDown(i);

        return res;
    }

    percolateDown(i) {
        while (2 * i < this.heap.length) {
            if (
                2 * i + 1 < this.heap.length &&
                this.heap[2 * i + 1] > this.heap[2 * i] &&
                this.heap[i] < this.heap[2 * i + 1]
            ) {
                let tmp = this.heap[i];
                this.heap[i] = this.heap[2 * i + 1];
                this.heap[2 * i + 1] = tmp;
                i = 2 * i + 1;
            } else if (this.heap[i] < this.heap[2 * i]) {
                let tmp = this.heap[i];
                this.heap[i] = this.heap[2 * i];
                this.heap[2 * i] = tmp;
                i = 2 * i;
            } else {
                break;
            }
        }
    }

    get length() {
        return this.heap.length - 1;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) { 
        const heap = new Heap();
        heap.heapify(nums);

        while (k > 1) {
            heap.pop();
            k--;
        }

        return heap.heap[1];
    }
}
