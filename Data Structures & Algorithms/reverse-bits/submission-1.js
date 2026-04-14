class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let reversedBin = '';

        while (n > 0) {
            if (n & 1) {
                reversedBin += '1';
            } else {
                reversedBin += '0';
            }
            n = n >> 1;
        }

        reversedBin += Array.from({ length: 32 - reversedBin.length }, () => '0').join('');

        return parseInt(reversedBin, 2);
    }
}
