class Solution {
    /**
     * @param {string[]} strs
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    findMaxForm(strs, m, n) {
        const arr = Array.from({ length: strs.length }, () => [0, 0]);
        for (let i = 0; i < strs.length; i++) {
            for (const c of strs[i]) {
                arr[i][c - '0']++;
            }
        }

        const dp = Array.from({ length: strs.length }, () =>
            Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1)),
        );

        const dfs = (i, m, n) => {
            if (i === strs.length) {
                return 0;
            }
            if (m === 0 && n === 0) return 0;
            if (dp[i][m][n] !== -1) return dp[i][m][n];

            let res = dfs(i + 1, m, n);
            if (m >= arr[i][0] && n >= arr[i][1]) {
                res = Math.max(
                    res,
                    1 + dfs(i + 1, m - arr[i][0], n - arr[i][1]),
                );
            }

            dp[i][m][n] = res;
            return res;
        };

        return dfs(0, m, n);
    }
}
