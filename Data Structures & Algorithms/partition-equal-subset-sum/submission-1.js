class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce((acc, num) => acc + num, 0);

        if (totalSum % 2 == 1) return false;

        const halfSum = totalSum / 2;

        return this.dfs(nums, 0, halfSum);
    }

    dfs(nums, i, target) {
        if (i === nums.length) {
            return target === 0;
        }
        if (target < 0) {
            return false;
        }

        return (
            this.dfs(nums, i + 1, target) ||
            this.dfs(nums, i + 1, target - nums[i])
        );
    }
}
