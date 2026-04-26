class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let totalSum = 0;
        for (const num of nums) {
            totalSum += num;
        }

        let prefix = 0;
        for (let i = 0; i < nums.length; i++) {
            const rightSum = totalSum - nums[i] - prefix;
            if (rightSum === prefix) {
                return i;
            }
            prefix += nums[i];
        }

        return -1;
    }
}
