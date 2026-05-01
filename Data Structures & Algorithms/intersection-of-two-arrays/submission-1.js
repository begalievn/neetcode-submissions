class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const [short, long] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];
        const set = new Set();
        const res = [];
        for (const num of short) {
            set.add(num);
        }

        for (const num of long) {
            if (set.has(num)) {
                res.push(num);
                set.delete(num);
            }
        }

        return res;
    }
}
