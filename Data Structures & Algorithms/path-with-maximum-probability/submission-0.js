class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(n, edges, succProb, start_node, end_node) {
        const adj = new Map();

        for (let i = 0; i < n; i++) adj.set(i, []);

        for (let i = 0; i < edges.length; i++) {
            const [src, dst] = edges[i];
            adj.get(src).push([dst, succProb[i]]);
            adj.get(dst).push([src, succProb[i]]);
        }

        const pq = new MaxPriorityQueue((x) => x[0]);
        pq.enqueue([1.0, start_node]);
        const visited = new Set();

        while (!pq.isEmpty()) {
            const [prob, cur] = pq.dequeue();
            visited.add(cur);

            if (cur === end_node) return prob;

            for (const [nei, edgeProb] of adj.get(cur)) {
                if (!visited.has(nei)) {
                    pq.enqueue([prob * edgeProb, nei]);
                }
            }
        }

        return 0;
    }
}
