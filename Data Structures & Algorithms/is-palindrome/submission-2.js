class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1;

        while (l < r) {
            if (!this.isAlphaNum(s[l])) {
        l++;
        continue;
    }
    if (!this.isAlphaNum(s[r])) {
        r--;
        continue;
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
