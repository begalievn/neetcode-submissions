class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindromeSubseq(s) {
        const n = s.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(-1));

        const dfs = (i, j) => {
            if (i < 0 || j === n) {
                return 0;
            }
            if (dp[i][j] !== -1) {
                return dp[i][j];
            }

            if (s[i] === s[j]) {
                const length = i === j ? 1 : 2;
                dp[i][j] = length + dfs(i - 1, j + 1);
            } else {
                dp[i][j] = Math.max(dfs(i - 1, j), dfs(i, j + 1));
            }

            return dp[i][j];
        };

        for (let i = 0; i < n; i++) {
            dfs(i, i); // Odd length
            dfs(i, i + 1); // Even length
        }

        let maxLength = 0;
        for (const row of dp) {
            for (const val of row) {
                maxLength = Math.max(maxLength, val);
            }
        }

        return maxLength;
    }
}