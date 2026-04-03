class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = 0;
        const map = new Map();

        for (const num of nums) {
            let value = map.get(num) || 0;
            value += 1;
            if (value >= nums.length / 2) {
                res = num;
            }
            map.set(num, value);
        }

        return res;
    }
}
