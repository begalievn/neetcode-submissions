class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {

        let i = 0;
        for (const char of s) {
            let j = i;
            while (j < t.length) {
                if (char == t[j]) {
                    i = j + 1;
                    break;
                }
                j++;
            }

            if (j >= t.length) return false;
        }

        return true;
    }
}
