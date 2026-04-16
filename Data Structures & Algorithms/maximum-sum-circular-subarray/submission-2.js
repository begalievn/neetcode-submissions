class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let globMax = nums[0];
        let globMin = nums[0];
        let curMax = 0;
        let curMin = 0;
        let total = 0;

        for(let num of nums) {
            curMax = Math.max(curMax + num, num);
            curMin = Math.min(curMax + num, num);
            total += num;
            globMax = Math.max(globMax, curMax);
            globMin = Math.min(globMin, curMin);
        }

        return globMax > 0 ? Math.max(globMax, total - globMin) : globMax;

    }
}
