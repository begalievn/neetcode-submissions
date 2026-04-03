class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let max = 0;

        while (r < prices.length) {
            const diff = prices[r] - prices[l];
            if (diff >= 0) {
                max = Math.max(diff, max);
                r++;
            } else {
                l = r;
                r++;
            }
        }

        return max;
    }
}
