class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const map = new Map();

        function recursion(n) {
            if (n < 0) return 0;
            if (n === 0) return 1;

            if (map.has(n)) {
                return map.get(n);
            }

            const left = recursion(n - 1);
            const right = recursion(n - 2);

            const result = left + right;
            map.set(n, result);

            return result;
        }

        return recursion(n);
    }
}
