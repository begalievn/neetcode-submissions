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

        function dfs(i, j, k) {
            const key = `${i},${j},${k}`;
            if (k === len3) return true;
            if (i === len1 && j === len2) return false;

            if (cache.has(key)) return cache.get(key);

            let result = false;

            if (s1[i] === s3[k]) {
                result = dfs(i + 1, j, k + 1);
            } else if (s2[j] === s3[k]) {
                result = dfs(i, j + 1, k + 1);
            } else if (i === len1) {
                result = dfs(i, j + 1, k);
            } else if (j === len2) {
                result = dfs(i + 1, j, k);
            } else {
                result = dfs(i, j + 1, k) || dfs(i + 1, j, k);
            }

            cache.set(key, result);

            return result;
        }

        return dfs(0, 0, 0);
    }
}
