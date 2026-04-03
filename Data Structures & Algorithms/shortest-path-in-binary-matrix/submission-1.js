class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const rows = grid.length;
        const cols = rows;
        const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
        const queue = [];

        if (grid[0][0] === 0) {
            queue.push([0, 0]);
        }
        visited[0][0] = 1;
        let length = 1;


        while (queue.length > 0) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                let pair = queue.shift();
                let [r, c] = pair;

                if (r === rows -1 && c === cols - 1) {
                    return length;
                }

                const neighbors = [[r - 1, c - 1], [r, c - 1], [r - 1, c + 1], [r, c + 1], [r + 1, c + 1], [r + 1, c], [r + 1, c - 1], [r, c - 1]];
                for (let j = 0; j < neighbors.length; j++) {
                    const newR = neighbors[j][0];
                    const newC = neighbors[j][1];

                    if (Math.min(newR, newC) < 0 || newR === rows || newC === cols || visited[newR][newC] === 1 || grid[newR][newC] === 1) {
                        continue;
                    }

                    queue.push([newR, newC]);
                    visited[newR][newC] = 1;
                }
            }
            length++;
        }

        return -1;
    }
}
