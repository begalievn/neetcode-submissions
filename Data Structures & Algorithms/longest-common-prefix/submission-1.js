class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let i = 0;
        let isCommon = true;
        const firstWord = strs[0];

        while (isCommon && i < firstWord.length) {
            const curChar = firstWord[i];

            for (const str of strs) {
                if (str[i] !== curChar) {
                    isCommon = false;
                    break;
                }
            }

            if (isCommon) i++;
        }

        return firstWord.substring(0, i);
    }
}
