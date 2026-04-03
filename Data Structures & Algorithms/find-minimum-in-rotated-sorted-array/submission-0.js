class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = 1000;
        for (const num of nums) {
            if (num < res) res = num;
        }

        return res;
    }
}
