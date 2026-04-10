class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const cache = Array.from(Array(rows), () => new Array(cols).fill(0));

        function memoization(r, c) {
            if (r === rows || c === cols || grid[r][c] === 1) return 0;
            if (cache[r][c] > 0) return cache[r][c];
            if (r === rows - 1 && c === cols - 1) return 1;

            cache[r][c] = memoization(r + 1, c) + memoization(r, c + 1);

            return cache[r][c];
        }

        return memoization(0, 0);
    }
}
