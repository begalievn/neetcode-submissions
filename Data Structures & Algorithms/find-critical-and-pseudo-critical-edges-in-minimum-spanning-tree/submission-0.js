class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[][]}
     */
    findCriticalAndPseudoCriticalEdges(n, edges) {
        const critical = [];
        const pseudo = [];
        const initialCost = this.minimumSpanningTree(n, edges);
        console.log(initialCost);

        for (let i = 0; i < edges.length; i++) {
            const curEdges = [];
            for (let j = 0; j < edges.length; j++) {
                if (i === j) continue;
                curEdges.push(edges[j]);
            }

            const curCost = this.minimumSpanningTree(n, curEdges);

            console.log('curCost', curCost);
            console.log('index', i);
            if (curCost > initialCost || curCost === 0) {
                critical.push(i);
            } else {
                pseudo.push(i);
            }
        }

        return [critical, pseudo];
    }

    minimumSpanningTree(n, edges) {
        const adj = new Map();
        for (let i = 0; i < n; i++) {
            adj.set(i, []);
        }

        for (const [a, b, weight] of edges) {
            adj.get(a).push([weight, b]);
            adj.get(b).push([weight, a]);
        }

        const minHeap = new MinPriorityQueue((entry) => entry[0]);
        let res = 0;
        const visit = new Set();

        for (const [weight, neighbor] of adj.get(0)) {
            minHeap.push([weight, neighbor]);
        }
        visit.add(0);

        while (visit.size < n && !minHeap.isEmpty()) {
            const [weight, node] = minHeap.pop();
            if (visit.has(node)) {
                continue;
            }

            res += weight;
            visit.add(node);

            for (const [neiWeight, neighbor] of adj.get(node)) {
                if (!visit.has(neighbor)) {
                    minHeap.push([neiWeight, neighbor]);
                }
            }
        }

        if (visit.size < n) {
            return 0;
        }

        return res;
    }
}
