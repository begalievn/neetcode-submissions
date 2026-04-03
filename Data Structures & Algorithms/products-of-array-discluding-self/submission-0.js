class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            let curr = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;
                curr *= nums[j];
            }
            res.push(curr);
        }

        return res;
    }
}
