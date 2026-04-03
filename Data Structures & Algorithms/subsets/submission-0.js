class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [[]];
        
        for (const num of nums) {
            const len = res.length;
            for (let i = 0; i < len; i++) {
                const curArray = [...res[i]];
                curArray.push(num);
                res.push(curArray);
            }
        }

        return res;
    }
}
