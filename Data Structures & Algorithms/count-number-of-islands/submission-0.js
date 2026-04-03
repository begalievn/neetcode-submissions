class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === "1") {
                    dfs(r, c);
                    count++;
                }
            }
        }

        function dfs(r, c) {
            if (Math.min(r, c) < 0 || r == ROWS || c == COLS || grid[r][c] === "0") {
                return;
            }
            if (grid[r][c] === "1") {
                grid[r][c] = "0";
            }

            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }

        return count;
    }
}
