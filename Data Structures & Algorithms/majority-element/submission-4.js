class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = 0;
        let count = 0;

        for (const num of nums) {
            if (count === 0) res = num;

            num === res ? count++ : count--;
        }

        return res;
    }
}
