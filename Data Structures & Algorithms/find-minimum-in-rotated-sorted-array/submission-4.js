class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let res = nums[0];

        while (l <= r) {
            const m = Math.floor((r - l) / 2) + l;
            if (nums[m] < res) res = nums[m];
            
            if (nums[l] < nums[m] && nums[m] < nums[r]) {
                return Math.min(res, nums[l]);
            } else if (nums[m] >= nums[l]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}
