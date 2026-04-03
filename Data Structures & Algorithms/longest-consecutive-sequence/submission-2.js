class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0;

        const map = new Map();
        nums.map((num) => {
            map.set(num, true);
        });

        let count = 1;

        for (const num of nums) {
            let curr = num;
            let currCount = 1;
            let hasConsecutive = true;

            while (hasConsecutive) {
                if (map.has(curr + 1)) {
                    curr += 1;
                    currCount += 1;
                    if (currCount > count) count = currCount;
                } else {
                    hasConsecutive = false;
                }
            }
        }

        return count;
    }
}
