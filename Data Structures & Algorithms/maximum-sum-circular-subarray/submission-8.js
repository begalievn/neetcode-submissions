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

        for(const num of nums) {
            curMax = Math.max(curMax + num, num);
            curMin = Math.min(curMin + num, num);
            total += num;
            globMax = Math.max(globMax, curMax);
            globMin = Math.min(globMin, curMin);
        }

        return globMax > 0 ? Math.max(globMax, total - globMin) : globMax;

    }

    // maxSubarraySumCircular(nums) {
    //     let globMax = nums[0],
    //         globMin = nums[0];
    //     let curMax = 0,
    //         curMin = 0,
    //         total = 0;

    //     for (const num of nums) {
    //         curMax = Math.max(curMax + num, num);
    //         curMin = Math.min(curMin + num, num);
    //         total += num;
    //         globMax = Math.max(globMax, curMax);
    //         globMin = Math.min(globMin, curMin);
    //     }

    //     return globMax > 0 ? Math.max(globMax, total - globMin) : globMax;
    // }

    // maxSubarraySumCircular(nums) {
    //     const n = nums.length;
    //     let res = nums[0];

    //     for (let i = 0; i < n; i++) {
    //         let curSum = 0;
    //         for (let j = i; j < i + n; j++) {
    //             curSum += nums[j % n];
    //             res = Math.max(res, curSum);
    //         }
    //     }

    //     return res;
    // }
}
