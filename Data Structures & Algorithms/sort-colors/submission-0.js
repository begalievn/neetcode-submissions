class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const items = [0, 0, 0];
        for (const num of nums) {
            items[num] = items[num] + 1;
        }

        let i = 0;
        for (let n = 0; n < items.length; n++) {
            for (let j = 0; j < items[n]; j++) {
                nums[i] = n;
                i++;
            }
        }

        return nums;
    }

}
