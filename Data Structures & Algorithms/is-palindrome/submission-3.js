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
        const code = char.charCodeAt(0);
        return (code >= 48 && code <= 57) ||   // 0-9
            (code >= 65 && code <= 90) ||   // A-Z
            (code >= 97 && code <= 122);    // a-z
    }
}
