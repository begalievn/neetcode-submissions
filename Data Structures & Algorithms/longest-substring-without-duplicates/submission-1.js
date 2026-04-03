class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length <= 1) return s.length;

        let max = 0;
        let l = 0;
        let r = 1;
        const map = new Map();
        map.set(s[l], true);

        while (r < s.length) {
            if (!map.has(s[r])) {
                map.set(s[r], true);
                max = Math.max(max, r - l + 1);
                r++;
            } else {
                map.delete(s[l]);
                l++;
            }
        }

        return max;
    }
}
