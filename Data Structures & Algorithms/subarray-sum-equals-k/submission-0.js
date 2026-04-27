class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let curSum = 0;
        const prefixSum = new Map();
        prefixSum.set(0, 1);

        for (let num of nums) {
            curSum += num;
            const diff = curSum - k;

            res += prefixSum.get(diff) || 0;
            prefixSum.set(curSum, (prefixSum.get(curSum) || 0) + 1);
        }

        return res;
    }
}
