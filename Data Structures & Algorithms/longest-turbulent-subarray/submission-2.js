class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let len = 0;
        let last = 0;
        let L = 0;

        if (arr.length <= 1) return arr.length;

        for (let R = 1; R < arr.length; R++) {
            if (arr[R-1] < arr[R]) {
                if (last !== -1) {
                    L = R - 1;
                }
                len = Math.max(len, R - L + 1);
                last = 1;
            } else if (arr[R-1] > arr[R]) {
                if (last !== 1) {
                    L = R - 1;
                } 
                len = Math.max(len, R - L + 1);
                last = -1;
            } else {
                last = 0;
                L = R;
            }
        }

        return len === 0 ? 1 : len;
    }
}
