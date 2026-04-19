class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let sum = 0;
        let res = Infinity;
        let L = 0;

        for (let R = 0; R < nums.length; R++) {
            sum += nums[R];

            while (sum >= target) {
                res = Math.min(res, R - L + 1);
                sum -= nums[L];
                L++;
            }
        }

        return res === Infinity ? 0 : res;
    }
}
