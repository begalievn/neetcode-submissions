class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(n, edges) {
        let adj = new Map();
        const nodes = [];

        for (let i = 0; i < n; i++) {
            adj.set(i, new Array());
            nodes.push(i);
        }
        for (let edge of edges) {
            let src = edge[0],
                dst = edge[1];
            adj.get(src).push(dst);
        }

        nodes.sort((a, b) => -1 * (adj.get(a).length - adj.get(b).length));
        console.log('nodes', nodes);
        console.log('adj', adj); 

        const topSort = new Array();
        const visit = new Set();
        for (const i of nodes) {
            if (adj.get(i).length === 0) {
                if (!visit.has(i)) {
                    topSort.push(i);
                }
                continue;
            }
            const path = new Set();
            if (!this.dfs(i, adj, visit, topSort, path)) {
                return [];
            }
        }
        // topSort.reverse();

        return topSort;
    }

    dfs(src, adj, visit, topSort, path) {
        if (path.has(src)) {
            return false;
        }
        if (visit.has(src)) {
            return true;
        }
        visit.add(src);
        path.add(src);

        for (let neighbor of adj.get(src)) {
            if (!this.dfs(neighbor, adj, visit, topSort, path)) {
                return false;
            }
        }
        topSort.push(src);
        return true;
    }
}
