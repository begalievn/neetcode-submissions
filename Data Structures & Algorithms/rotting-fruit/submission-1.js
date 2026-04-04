class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let max = 0;
        let time = 0;
        let fresh = 0;
        const queue = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                }
                if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        while (queue.length > 0 && fresh > 0) {
            let length = queue.length;
            for (let i = 0; i < length; i++) {
                const [curR, curC] = queue.shift();

                for (const [dr, dc] of directions) {
                    const row = curR + dr;
                    const col = curC + dc;

                    if (
                        row >= 0 &&
                        row < rows &&
                        col >= 0 &&
                        col < cols &&
                        grid[row][col] === 1
                    ) {
                        grid[row][col] = 2;
                        queue.push([row, col]);
                        fresh--;
                    }
                }
            }
            time++;
        }

        return fresh === 0 ? time : -1;
    }
}
