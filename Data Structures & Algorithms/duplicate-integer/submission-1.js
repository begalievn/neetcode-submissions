class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for (const item of nums) {
            if (map.has(item)) {
                return true;
            }
            map.set(item, true);
        }

        return false;
    }
}
