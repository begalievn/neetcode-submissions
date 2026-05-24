class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const N = points.length;
        const adj = new Map();
        for (let i = 0; i < N; i++) {
            adj.set(i, []);
        }
        
        for (let i = 0; i < points.length; i++) {
            const [x1, y1] = points[i];

            for (let j = i + 1; j < N; j++) {
                const [x2, y2] = points[j];
                const weight = this.manhattanDistance(x1, y1, x2, y2);
                adj.get(i).push([weight, j]);
                adj.get(j).push([weight, i]);
            }
        }

        const minHeap = new MinPriorityQueue((entry) => entry[0]);
        let res = 0;
        const visit = new Set();

        for (let i = 0; i < N; i++) {
            for (let [weight, j] of adj.get(i)) {
                minHeap.push([weight, i, j]);
            }
        }

        const unionFind = new UnionFind(N);
        const mst = [];

        while (mst.length < N - 1) {
            const [weight, n1, n2] = minHeap.pop();
            if (unionFind.union(n1, n2) === false) {
                continue;
            }
            mst.push([n1, n2]);
            res += weight;
        }

        return res;
    }

    manhattanDistance(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }
}

class UnionFind {
    /**
     * @constructor
     * @param {number} n
     */
    constructor(n) {
        this.par = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(1);
    }

    /**
     * @param {number} v1
     * @return {number}
     */
    find(v1) {
        if (this.par[v1] !== v1) {
            this.par[v1] = this.find(this.par[v1]);
        }
        return this.par[v1];
    }

    /**
     * @param {number} v1
     * @param {number} v2
     * @return {boolean}
     */
    union(v1, v2) {
        const p1 = this.find(v1),
            p2 = this.find(v2);
        if (p1 === p2) return false;
        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1;
            this.rank[p1] += this.rank[p2];
        } else {
            this.par[p1] = p2;
            this.rank[p2] += this.rank[p1];
        }
        return true;
    }
}
