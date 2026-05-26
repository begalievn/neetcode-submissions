class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const len = board.length;
        const rowMap = new Map();
        const colMap = new Map();
        const squareMap = new Map();
        for (let i = 0; i < len; i++) {
            rowMap.set(i, new Set());
            colMap.set(i, new Set());
            squareMap.set(i, new Set());
        }
 
        for (let r = 0; r < len; r++) {
            for (let c = 0; c < len; c++) {
                const item = board[r][c];
                if (item === '.') continue;
                // handle row
                if (rowMap.get(r).has(item)) {
                    return false;
                } else {
                    rowMap.get(r).add(item);
                }

                // handle column
                if (colMap.get(c).has(item)) {
                    return false;
                } else {
                    colMap.get(c).add(item);
                }

                // handle square
                const squareIdx = Math.floor((r / 3)) * 3 + Math.floor((c / 3));
                if (squareMap.get(squareIdx).has(item)) {
                    return false;
                } else {
                    squareMap.get(squareIdx).add(item);
                }
            }
        }

        return true;
    }
}
