class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 0;

        for (let j = 1; j < nums.length; j++) {
            if (nums[i] !== nums[j]) {
                i += 1;
                nums[i] = nums[j];
            }
        }
        console.log(nums);

        return i + 1;
    }
}
