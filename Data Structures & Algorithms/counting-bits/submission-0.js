class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const result = [];
        for (let i = 0; i <= n; i++) {
            result.push(this.countNumBits(i));
        }

        return result;
    }

    countNumBits(num) {
        let count = 0;
        while (num > 0) {
            if ((num & 1) === 1) {
                count++;
            }
            num = num >> 1;
        }

        return count;
    }
}
