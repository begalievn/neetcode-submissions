class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const map = new Map();

        if (prerequisites.length === 0) return true;

        for (const [a, b] of prerequisites) {
            map.set(a, b);
        }

        function dfs(a, b, visited) {
            if (visited.has(b)) {
                return false;
            }

            visited.add(a);

            const prerequisiteB = map.get(b);
            console.log('pre', prerequisiteB);
            if (Number.isInteger(prerequisiteB)) {
                return dfs(b, prerequisiteB, visited);
            }

            return true;
        }

        for (const [a, b] of prerequisites) {
            const visited = new Set();
            const possible = dfs(a, b, visited);
            console.log('visited', visited);

            if (!possible) return false;
            if (possible && numCourses - 1 === visited.size) {
                return true;
            }
        }

        return false;
    }
}
