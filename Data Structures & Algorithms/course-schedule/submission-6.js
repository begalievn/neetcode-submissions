class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const map = new Map();

        for (let i = 0; i < numCourses; i++) {
            map.set(i, []);
        }

        for (const [a, b] of prerequisites) {
            map.set(a, [...(map.get(a) || []), b]);
        }

        // visitSet = all courses along the curr DFS path
        const visitSet = new Set();

        function dfs(crs) {
            if (visitSet.has(crs)) {
                return false;
            }
            if (map.get(crs).length === 0) {
                return true;
            }

            visitSet.add(crs);

            for (const pre of map.get(crs)) {
                if (!dfs(pre)) {
                    return false;
                }
            }
            visitSet.delete(crs);
            map.set(crs, []);

            return true;
        }

        for (let crs = 0; crs < numCourses; crs++) {
            if (!dfs(crs)) {
                return false;
            }
        }

        return true;
    }
}
