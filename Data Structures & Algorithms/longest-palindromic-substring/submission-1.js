class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longest = 0;
        let longL = 0
        let longR = 0;
        const len = s.length;

        for (let i = 0; i < len; i++) {
            // odd length
            let l = i, r = i;
            while (l >= 0 && r < len && s[l] === s[r]) {
                if (r - l + 1 > longest) {
                    longest = r - l + 1;
                    longL = l;
                    longR = r;
                }
                l--;
                r++;
            }

            // even length
            l = i, r = i + 1;
            while (l >= 0 && r < len && s[l] === s[r]) {
                if (r - l + 1 > longest) {
                    longest = r - l + 1;
                    longL = l;
                    longR = r;
                }
                l--;
                r++;
            }
        }

        return s.slice(longL, longR + 1);
    }
}
