class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let prevRow = new Array(n).fill(0);

        for (let r = m - 1; r >= 0; r--) {
            let curRow = new Array(n).fill(0);
            curRow[n - 1] = 1;
            for (let c = n - 2; c >= 0; c--) {
                curRow[c] = curRow[c + 1] + prevRow[c];
            }

            prevRow = curRow;
        }

        return prevRow[0];
    }

    memoization(r, c, rows, cols, cache) {
        if (r === rows || c === cols) return 0;
        if (cache[r][c] > 0) {
            return cache[r][c];
        }
        if (r === rows - 1 && c === cols - 1) return 1;

        cache[r][c] = this.memoization(r + 1, c, rows, cols, cache) + this.memoization(r, c + 1, rows, cols, cache);

        return cache[r][c];
    }
}
