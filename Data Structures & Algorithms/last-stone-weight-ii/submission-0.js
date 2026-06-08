class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        const stoneSum = stones.reduce((acc, num) => acc + num, 0);
        const target = Math.ceil(stoneSum / 2);
        const len = stones.length;
        const cache = new Map();

        function dfs(i, total) {
            const key = `${i}, ${total}`;
            if (total >= target || i == len) {
                return Math.abs(total - (stoneSum - total));
            }
            if (cache.has(key)) return cache.get(key);

            cache.set(key, Math.min(dfs(i + 1, total), dfs(i + 1, total + stones[i])));

            return cache.get(key);
        }

        return dfs(0, 0);
    }
}
