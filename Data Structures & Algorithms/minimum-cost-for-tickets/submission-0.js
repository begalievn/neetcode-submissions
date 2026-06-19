class Solution {
    /**
     * @param {number[]} days
     * @param {number[]} costs
     * @return {number}
     */
    mincostTickets(days, costs) {
        const dp = new Array(days.length).fill(-1);

        const dfs = (i) => {
            if (i === days.length) return 0;
            if (dp[i] !== -1) return dp[i];

            dp[i] = Infinity;
            let j = i;
            [1, 7, 30].forEach((d, idx) => {
                while (j < days.length && days[j] < days[i] + d) {
                    j++;
                }
                dp[i] = Math.min(dp[i], costs[idx] + dfs(j));
            });

            return dp[i];
        }

        return dfs(0);
    }
}
