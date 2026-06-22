class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const len1 = word1.length;
        const len2 = word2.length;
        const cache = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(-1));

        function dfs(i, j) {
            if (i === len1) return len2 - j;
            if (j === len2) return len1 - i;
            if (cache[i][j] !== -1) return cache[i][j];

            let res = 0;
            if (word1[i] === word2[j]) {
                res = dfs(i + 1, j + 1);
            } else {
                res = 1 + Math.min(dfs(i + 1, j), dfs(i, j + 1), dfs(i + 1, j + 1));
            }

            cache[i][j] = res;

            return cache[i][j];
        }

        return dfs(0, 0);
    }
}
