class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let binary = n.toString(2);
        let reversedBinary = binary.split('').reverse().join('') + new Array(32 - binary.length).fill(0).join('');
        return parseInt(reversedBinary, 2);
    }
}
