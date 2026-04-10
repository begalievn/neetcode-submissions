class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let prevRow = new Array(cols).fill(0);
        prevRow[cols - 1] = 1;

        for (let r = rows - 1; r >= 0; r--) {
            let curRow = new Array(cols).fill(0);
            if (grid[r][cols - 1] === 1 || prevRow[cols - 1] === 0) {
                curRow[cols - 1] = 0;
            } else {
                curRow[cols - 1] = 1;
            }
            console.log('curRow', curRow);
            for (let c = cols - 2; c >= 0; c--) {
                if (grid[r][c] === 1) {
                    curRow[c] = 0;
                } else {
                    curRow[c] = curRow[c + 1] + prevRow[c];
                }
            }
            prevRow = curRow;
        }

        return prevRow[0];
    }   
}
