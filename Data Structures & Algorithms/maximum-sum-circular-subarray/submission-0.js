class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        const len = nums.length;
        let maxSum = nums[0];
        let curSum = 0;
        let L = 0;
        let R = 0;
        const cache = new Map();

        while (R < len * 2 && R - L !== len) {
            if (cache.has(`${L},${R}`)) {
                break;
            }

            if (curSum < 0) {
                curSum = 0;
                L = R;
            }

            curSum += nums[R % len];
            if (curSum > maxSum) {
                maxSum = curSum;
            }

            cache.set(`${L},${R}`, curSum);
            R++;
        }

        return maxSum;

    }
}
