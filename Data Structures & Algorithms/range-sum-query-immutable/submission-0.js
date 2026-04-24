class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = [];
        let total = 0;
        for (const num of nums) {
            total += num;
            this.prefix.push(total);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const rightPrefix = this.prefix[right];
        const leftPrefix = left > 0 ? this.prefix[left - 1] : 0;
        return rightPrefix - leftPrefix;
    }
}
