class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const newArr = new Array(nums.length * 2).fill(0);
        for (let i = 0; i < nums.length; i++) {
            newArr[i] = nums[i];
            newArr[nums.length + i] = nums[i];
        }

        return newArr;
    }
}
