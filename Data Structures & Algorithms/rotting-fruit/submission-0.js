class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let max = 0;
        const set = new Set();

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    set.add(`${r},${c}`);
                }
                if (grid[r][c] === 2) {
                    max = Math.max(max, bfs(r, c));
                }
            }
        }

        function bfs(startRow, startCol) {
            let len = 0;
            const queue = [[startRow, startCol]];

            while (queue.length > 0) {
                let queueLen = queue.length;
                for (let i = 0; i < queueLen; i++) {
                    const [r, c] = queue.shift();

                    let neighbors = [[r, c + 1], [r, c - 1], [r + 1, c], [r - 1, c]];
                    for (let j = 0; j < 4; j++) {
                        let newR = neighbors[j][0], newC = neighbors[j][1];
                        if (Math.min(newR, newC) < 0 || newR == rows || newC == cols
                            || grid[newR][newC] == 0 || grid[newR][newC] == 2) {
                            continue;
                        }
                        queue.push(neighbors[j]);
                        grid[newR][newC] = 2;
                        if (set.has(`${newR},${newC}`)) {
                            set.delete(`${newR},${newC}`)
                        }
                    }
                }
                len++;
            }

            return len - 1;
        }

        if (set.size > 0) return -1;

        return max;
    }
}
