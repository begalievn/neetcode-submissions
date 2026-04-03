class MaxHeap {
    constructor() {
        this.heap = new Array();
        this.heap.push([0, [0, 0]]);
    }

    push(val) {
        console.log('pushed', val);
        this.heap.push(val);
        let i = this.heap.length - 1;

        while (i > 1 && this.heap[i][0] > this.heap[Math.floor(i / 2)][0]) {
            let tmp = this.heap[i];
            this.heap[i] = this.heap[Math.floor(i / 2)];
            this.heap[Math.floor(i / 2)] = tmp;
            i = Math.floor(i / 2);
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

        while (i * 2 < this.heap.length) {
            if (
                i * 2 + 1 < this.heap.length && 
                this.heap[2 * i + 1][0] > this.heap[2 * i][0] &&
                this.heap[i][0] < this.heap[2 * i + 1][0]
            ) {
                let tmp = this.heap[i];
                this.heap[i] = this.heap[2 * i + 1];
                this.heap[2 * i + 1] = tmp;
                i = 2 * i + 1;
            } else if (this.heap[i][0] < this.heap[2 * i][0]) {
                let tmp = this.heap[i];
                this.heap[i] = this.heap[i * 2];
                this.heap[2 * i] = tmp;
                i = 2 * i;
            } else {
                break;
            }
        }

        return res;
    }

    get length() {
        return this.heap.length - 1;
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new MaxHeap();
        const origin = [0, 0];

        for (const point of points) {
            const distance = this.getDistance(point);
            maxHeap.push([distance, point]);

            if (maxHeap.length > k) {
                const popped = maxHeap.pop();
                console.log(popped);
            }
        }

        const result = maxHeap.heap.slice(1).map((item) => item[1]);

        return result;
    }

    getDistance(point) {
    // No need for Math.sqrt when comparing magnitudes
    return point[0] * point[0] + point[1] * point[1];
};
}
