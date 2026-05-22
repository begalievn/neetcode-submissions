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
        minHeap.push([0, 0]);



        while (visit.size < N) {
            const [weight, i] = minHeap.pop();
            if (visit.has(i)) {
                continue;
            }
            
            res += weight;
            visit.add(i);

            for (const [neiWeight, nei] of adj.get(i)) {
                if (!visit.has(nei)) {
                    minHeap.push([neiWeight, nei]);
                }
            }
        }

        return res;
    }

    manhattanDistance(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }
}
