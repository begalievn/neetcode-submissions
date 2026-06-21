class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const M = s.length;
        const N = t.length;
        const cache = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(-1))

        function dfs(i, j) {
            if (j >= N) return 1;
            if (i >= M) return 0;
            if (cache[i][j] !== -1) return cache[i][j];

            if (s[i] == t[j]) {
                cache[i][j] = dfs(i + 1, j + 1) + dfs(i + 1, j);
            } else {
                cache[i][j] = dfs(i + 1, j);
            }

            return cache[i][j];
        }

        return dfs(0, 0);
    }
}
