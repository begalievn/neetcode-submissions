class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const cache = new Map();

        function dfs(i, j, cache) {
            const key = `${i},${j}`;
            if (i === text1.length || j === text2.length) return 0;
            if (cache.has(key)) return cache.get(key);
            if (text1[i] === text2[j]) {
                return 1 + dfs(i + 1, j + 1, cache);
            }

            cache.set(key, Math.max(dfs(i + 1, j, cache), dfs(i, j + 1, cache)));

            return cache.get(key); 
        }

        return dfs(0, 0, cache);
    }
}
