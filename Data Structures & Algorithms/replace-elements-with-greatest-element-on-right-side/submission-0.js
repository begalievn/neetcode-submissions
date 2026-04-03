class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const res = [];

        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) {
                res.push(-1);
                break;
            }

            let max = arr[i + 1];
            for (let j = i + 1; j < arr.length; j++) {
                max = Math.max(max, arr[j]);
            }
            res.push(max);
        }

        return res;
    }
}
