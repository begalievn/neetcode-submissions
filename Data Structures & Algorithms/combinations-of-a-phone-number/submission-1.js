class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const len = digits.length;
        const res = [];
        const digitToChar = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'qprs',
            '8': 'tuv',
            '9': 'wxyz'
        };

        function backtrack(i, cur) {
            if (cur.length === len) {
                res.push(cur);
                return;
            }
            if (i > len) return;

            for (const char of digitToChar[digits[i]]) {
                backtrack(i + 1, cur + char);
            }
        }

        if (len) {
            backtrack(0, '');
        }

        return res;
    }
}
