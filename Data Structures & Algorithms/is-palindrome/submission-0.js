class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alpha = s.split('').map((char) => {
            let RegEx = /^[a-z0-9]+$/i; 
            if (RegEx.test(char)) return char.toLocaleLowerCase();
            return "";
        }).join('');

        let i = 0, j = alpha.length - 1;

        while (i < j) {
            if (alpha[i] !== alpha[j]) return false;

            i++;
            j--;
        }

        return true;
    }
}
