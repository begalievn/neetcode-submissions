class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const len = s.length;
        let count = 0;

        for (let i = 0; i < len; i++) {
            // odd length
            let l = i, r = i;
            while (l >= 0 && r < len && s[l] === s[r]) {
                count++;
                l--;
                r++;
            }

            l = i, r = i + 1;
            while (l >= 0 && r < len && s[l] == s[r]) {
                count++;
                l--;
                r++;
            }
        } 

        return count;
    }
}
