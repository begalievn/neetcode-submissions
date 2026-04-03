class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let max = 0;
        const visited = Array.from({ length: rows }, () => new Array(cols).fill(0));

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] && !visited[r][c]) {
                    const area = dfs(r, c);
                    console.log({ area, r, c });
                    if (area > max) max = area;
                }
            }
        }

        function dfs(r, c) {
            console.log('dfs', { r, c });
            if (Math.min(r, c) < 0 || r === rows || c === cols || grid[r][c] === 0 || visited[r][c] === 1) {
                console.log('return 0');
                return 0;
            }

            visited[r][c] = 1;
            console.log('visited', { r, c });

            let count = 1;
            count += dfs(r + 1, c);
            count += dfs(r - 1, c);
            count += dfs(r, c + 1);
            count += dfs(r, c - 1);

            return count;
        }

        return max;
    }
}
