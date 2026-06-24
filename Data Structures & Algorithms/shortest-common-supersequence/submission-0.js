class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    shortestCommonSupersequence(str1, str2) {
        const n = str1.length,
            m = str2.length;
        const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(''));

        for (let i = 0; i <= n; i++) {
            for (let j = 0; j <= m; j++) {
                if (i === 0) {
                    dp[i][j] = str2.slice(0, j);
                } else if (j === 0) {
                    dp[i][j] = str1.slice(0, i);
                } else if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
                } else {
                    dp[i][j] =
                        dp[i - 1][j].length < dp[i][j - 1].length
                            ? dp[i - 1][j] + str1[i - 1]
                            : dp[i][j - 1] + str2[j - 1];
                }
            }
        }

        return dp[n][m];
    }
}
