class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const entries = Array.from(map.entries());
        entries.sort((a, b) => b[1] - a[1]);
        const res = entries.slice(0, k).map((entry) => entry[0]);

        return res;
    }
}
