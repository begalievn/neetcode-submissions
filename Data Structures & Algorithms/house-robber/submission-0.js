class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Map();

        function dfs(i, cache) {
            if (i >= nums.length) {
                return 0;
            }

            if (cache.has(i)) return cache.get(i);

            const max = Math.max(nums[i] + dfs(i + 2, cache), dfs(i + 1, cache));
            cache.set(i, max);

            return max;
        }

        return dfs(0, cache);
    }


}
