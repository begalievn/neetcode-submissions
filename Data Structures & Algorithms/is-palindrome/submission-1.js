class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphaNum(s[l])) {
                l++;
            }
            while (l < r && !this.isAlphaNum(s[r])) {
                r--;
            }

            if (s[l].toLocaleLowerCase() !== s[r].toLocaleLowerCase()) return false;

            l++;
            r--;
        }

        return true;
    }

    isAlphaNum(char) {
        const RegEx = /^[a-z0-9]+$/i; 

        return RegEx.test(char);
    }
}
