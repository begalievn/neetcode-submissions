class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1;
        const res = new Array(arr.length).fill(0);

        for (let i = arr.length - 1; i >= 0; i--) {
            if (i === arr.length - 1) {
                res[i] = max;
                continue;
            }

            max = Math.max(arr[i + 1], max);
            res[i] = max;
        }

        return res;
    }
}
