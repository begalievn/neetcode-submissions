class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let L = 0;
        const set = new Set();

        for (let R = 0; R < nums.length; R++) {
            if (R - L > k) {
                set.delete(nums[L]);
                L++;
            }
            if (set.has(nums[R])) {
                return true;
            }
            set.add(nums[R]);
        }

        console.log(set);

        return false;
    }
}
