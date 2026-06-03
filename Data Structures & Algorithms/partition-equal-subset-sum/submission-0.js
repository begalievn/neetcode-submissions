class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce((acc, num) => acc + num);

        if (totalSum % 2 == 1) return false;

        const halfSum = totalSum / 2;

        return this.dfs(0, nums, 0, halfSum);
    }

    dfs(i, nums, curSum, targetSum) {
        if (i === nums.length) return false;
        if (curSum > targetSum) return false;
        if (curSum === targetSum) return true;

        return this.dfs(i + 1, nums, curSum, targetSum) || this.dfs(i + 1, nums, curSum + nums[i], targetSum);
    }
}
