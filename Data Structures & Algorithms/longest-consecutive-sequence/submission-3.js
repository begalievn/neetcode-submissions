class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for (const num of nums) {
            // Check if its the start of a sequence
            if (!set.has(num - 1)) {
                let length = 0;
                
                while (set.has(num + length)) {
                    length += 1;
                }

                longest = Math.max(length, longest);
            } 
        }

        return longest;
    }
}
