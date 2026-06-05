class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const len = nums.length;
        const cache = new Map();

        function dfs(i, curSum) {
            const key = `${i}`;

            if (i >= len) {
                if (curSum === target) return 1;
                
                return 0;
            }

            // if (cache.has(key)) return cache.get(key);

            const curNum = nums[i];
            
            const count = dfs(i + 1, curSum + curNum) + dfs(i + 1, curSum + (-1 * curNum));

            // cache.set(key, count);

            return count;
        }

        return dfs(0, 0);
    }
}
