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
        const freq = new Array(nums.length + 1).fill([]);
        for (const entry of entries) {
            freq[entry[1]] = [...freq[entry[1]], entry[0]];
        }

        const res = [];

        for (let i = freq.length - 1; i >= 0; i--) {
            const elements = freq[i];
            for (const element of elements) {
                res.push(element);
                if (res.length === k) {
                    return res;
                }
            }
        }

        return res;
    }
}
