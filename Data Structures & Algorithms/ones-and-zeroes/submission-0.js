class Solution {
    /**
     * @param {string[]} strs
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    findMaxForm(strs, m, n) {
        const arr = Array.from({ length: strs.length }, () => [0, 0]);
        for (let i = 0; i < strs.length; i++) {
            for (const c of strs[i]) {
                arr[i][c - '0']++;
            }
        }

        const dfs = (i, m, n) => {
            if (i === strs.length) {
                return 0;
            }

            let res = dfs(i + 1, m, n);
            if (m >= arr[i][0] && n >= arr[i][1]) {
                res = Math.max(
                    res,
                    1 + dfs(i + 1, m - arr[i][0], n - arr[i][1]),
                );
            }
            return res;
        };

        return dfs(0, m, n);
    }
}
