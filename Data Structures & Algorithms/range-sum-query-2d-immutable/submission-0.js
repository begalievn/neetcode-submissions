class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        let R = matrix.length;
        let C = matrix[0].length;
        this.prefixMatrix = Array.from({ length: R }, () => new Array(C).fill(0));
        const colSumMatrix = Array.from({ length: R }, () => new Array(C).fill(0));
        for (let r = 0; r < R; r++) {
            for (let c = 0; c < C; c++) {
                if (colSumMatrix[r - 1]) {
                    colSumMatrix[r][c] = colSumMatrix[r - 1][c] + matrix[r][c];
                } else {
                    colSumMatrix[r][c] = matrix[r][c];
                }
            }
        }

        console.log('colSumMatrix', colSumMatrix);
        
        for (let r = 0; r < R; r++) {
            for (let c = 0; c < C; c++) {
                let sum = 0;
                if (r > 0) {
                    sum += colSumMatrix[r-1][c];
                }
                if (c > 0) {
                    sum += this.prefixMatrix[r][c-1];
                }
                sum += matrix[r][c];
                this.prefixMatrix[r][c] = sum;
            }
        }

        console.log('prefixMatrix', this.prefixMatrix);
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        console.log({
            row1, col1, row2, col2
        });
        let totalSum = this.prefixMatrix[row2][col2];
        console.log('totalSum', totalSum);
        if (row1 > 0) {
            console.log('left', this.prefixMatrix[row1 - 1][col1]);
            totalSum -= this.prefixMatrix[row1 - 1][col2];
        }
        if (col1 > 0) {
            console.log('right', this.prefixMatrix[row1][col1 - 1]);
            totalSum -= this.prefixMatrix[row2][col1 - 1];
        }
        if (row1 > 0 && col1 > 0) {
            console.log('top', this.prefixMatrix[row1 - 1][col1 - 1]);
            totalSum += this.prefixMatrix[row1 - 1][col1 - 1];
        }

        return totalSum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
