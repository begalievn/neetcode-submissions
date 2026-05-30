class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adj = new Map();
        for (let i = 0; i < numCourses; i++) {
            adj.set(i, []);
        }
        for (const [prereq, crs] of prerequisites) {
            adj.get(crs).push(prereq);
        }

        const prereqMap = new Map();
        
        function dfs(crs) {
            if (!prereqMap.has(crs)) {
                prereqMap.set(crs, new Set());

                for (const prereq of adj.get(crs)) {
                    prereqMap.set(crs, prereqMap.get(crs).union(dfs(prereq)));
                }
                prereqMap.get(crs).add(crs);
            }

            return prereqMap.get(crs);
        }

        for (let i = 0; i < numCourses; i++) {
            dfs(i);
        }

        const res = [];
        for (const [u, v] of queries) {
            res.push(prereqMap.get(v).has(u));
        }

        return res;
    }
}
