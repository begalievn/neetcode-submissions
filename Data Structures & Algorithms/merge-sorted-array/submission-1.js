class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        const res = nums1;
        nums1 = nums1.slice(0, m);
        let i = 0;
        let mP = 0;
        let nP = 0;

        while (mP < m && nP < n) {
            const mVal = nums1[mP];
            const nVal = nums2[nP];
            if (mVal <= nVal) {
                res[i] = mVal;
                mP++;
            } else {
                res[i] = nVal;
                nP++;
            }
            i++;
        }

        while (mP < m) {
            res[i] = nums1[mP];
            i++;
            mP++;
        }
        while (nP < n) {
            res[i] = nums2[nP];
            i++;
            nP++;
        }

        return res;
    } 
}
