class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const len1 = s1.length;
        const len2 = s2.length;
        const len3 = s3.length;

        if (len1 + len2 < len3) return false;
        const cache = new Map();

        function dfs(i, j) {
            const key = `${i},${j}`;
            if (i === len1 && j === len2) return true;

            if (cache.has(key)) return cache.get(key);

            if (i < len1 && s1[i] === s3[i + j] && dfs(i + 1, j)) {
                return true;
            } else if (j < len2 && s2[j] === s3[i + j] && dfs(i, j + 1)) {
                return true;
            } 

            cache.set(key, false);

            return cache.get(key);
        }

        return dfs(0, 0);
    }
}
