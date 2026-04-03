class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let l = -1;
        let r = 0;

        while (r < nums.length) {
            if (nums[r] === 1) {
                max = Math.max(max, r - l);
            } else {
                l = r;
            }
            r++;
        }

        return max;
    }
}
