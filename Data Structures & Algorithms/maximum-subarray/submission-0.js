class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let curSum = 0;

        for (let num of nums) {
            curSum = Math.max(curSum, 0);
            curSum += num;
            maxSum = Math.max(maxSum, curSum);
        }

        return maxSum;
    }
}
