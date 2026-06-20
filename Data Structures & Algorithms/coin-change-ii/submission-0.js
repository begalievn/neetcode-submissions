class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const len = coins.length;
        const cache = Array.from({ length: len }, () => Array(amount).fill(-1));
        
        function dfs(index, count) {
            if (count === amount) return 1;
            if (index >= len || count > amount) return 0;
            if (cache[index][count] != -1) {
                return cache[index][count];
            }

            let variants = dfs(index + 1, count);

            let curAmount = count + coins[index];
            const total = dfs(index, curAmount) + variants;

            cache[index][count] = total;

            return total;
        }

        return dfs(0, 0);
    }
}
