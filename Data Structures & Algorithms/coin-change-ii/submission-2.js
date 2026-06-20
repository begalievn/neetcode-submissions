class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const len = coins.length;
        const cache = Array.from({ length: len }, () => Array(amount + 1).fill(0));
        for (let i = 0; i < len; i++) {
            cache[i][0] = 1;
        }

        for (let r = len - 1; r >= 0; r--) {
            const coin = coins[r];
            for (let c = 1; c <= amount; c++) {
                let count = 0;
                if (c - coin >= 0) {
                    count += cache[r][c - coin];
                }
                if (r < len - 1) {
                    count += cache[r + 1][c];
                }

                cache[r][c] = count;
            }
        }

        return cache[0][amount];
    }
}
