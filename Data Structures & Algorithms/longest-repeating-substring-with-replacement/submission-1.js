class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        const charSet = new Set(s);

        for (const char of charSet) {
            let count = 0;
            let l = 0;

            for (let r = 0; r < s.length; r++) {
                if (s[r] === char) count++;

                while (r - l + 1 - count > k) {
                    if (s[l] === char) {
                        count--;
                    }
                    l++;
                }

                res = Math.max(res, r - l + 1);
            }
        }

        return res;
    }
}
