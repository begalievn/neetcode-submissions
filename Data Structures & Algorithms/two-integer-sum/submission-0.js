class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const remainder = target - num;
            if (map.get(remainder) || map.get(remainder) == 0) {
                return [map.get(remainder), i];
            }

            map.set(num, i);
        }


    }
}
