class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const cache = Array.from(Array(m), () => new Array(n).fill(0));
        
        return this.memoization(0, 0, m, n, cache);
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
