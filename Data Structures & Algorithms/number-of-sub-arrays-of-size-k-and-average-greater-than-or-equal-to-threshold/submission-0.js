class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let res = 0;
        let L = 0;
        let sum = 0;

        for (let R = 0; R < arr.length; R++) {
            sum += arr[R];

            if (R - L + 1 > k) {
                sum -= arr[L];
                L++;
            }
            
            if (R - L + 1 === k) {
                if (sum / k >= threshold) {
                    res++;
                }
            }
        }

        return res;
    }
}
