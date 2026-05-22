class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const adj = new Map();

        if (points.length <= 1) return 0;
        
        for (let i = 0; i < points.length; i++) {
            const [x1, y1] = points[i];
            const key1 = `${x1},${y1}`;

            for (let j = i + 1; j < points.length; j++) {
                const [x2, y2] = points[j];
                const key2 = `${x2},${y2}`;
                const weight = this.manhattanDistance(x1, y1, x2, y2);
                adj.set(key1, [...(adj.get(key1) || []), [[x2, y2], weight]]);
                adj.set(key2, [...(adj.get(key2) || []), [[x1, y1], weight]]);
            }
        }

        const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
        for (const neighbor of adj.get(points[0].join(','))) {
            const [node, weight] = neighbor;
            minHeap.enqueue([weight, points[0], node]);
        }

        let mst = 0;
        const visit = new Set();
        visit.add(points[0].join(','));

        while (visit.size < points.length) {
            const [weight, node1, node2] = minHeap.dequeue();
            const key2 = node2.join(',');
            if (visit.has(key2)) {
                continue;
            }
            
            mst += weight;
            visit.add(key2);

            for (const pair of adj.get(key2)) {
                const [neighbor, weight] = pair;
                if (!visit.has(neighbor.join(','))) {
                    minHeap.enqueue([weight, node2, neighbor]);
                }
            }
        }

        return mst;
    }

    manhattanDistance(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }
}
