class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const dp = new Array(cols + 1).fill(0);
        dp[cols - 1] = 1;

        for (let r = rows - 1; r >= 0; r--) {
            for (let c = cols - 1; c >= 0; c--) {
                if (grid[r][c] === 1) {
                    dp[c] = 0;
                } else {
                    dp[c] += dp[c + 1];
                }
            }
        }

        return dp[0];
    }   
}
