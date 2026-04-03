class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ml = 0;
        let mr = matrix.length - 1;

        while (ml <= mr) {
            const mm = Math.floor((ml + mr) / 2);
            const arr = matrix[mm];
            let l = 0;
            let r = arr.length - 1;

            while (l <= r) {
                const m = Math.floor((l + r) / 2);

                if (arr[m] === target) {
                    return true;
                } else if (arr[m] > target) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }

            if (l >= arr.length - 1) {
                ml = mm + 1;
            } else {
                mr = mm - 1;
            }
        }

        return false;
    }
}
