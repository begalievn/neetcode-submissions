class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // subsets(nums) {
    //     const res = [[]];
        
    //     for (const num of nums) {
    //         const len = res.length;
    //         for (let i = 0; i < len; i++) {
    //             const curArray = [...res[i]];
    //             curArray.push(num);
    //             res.push(curArray);
    //         }
    //     }

    //     return res;
    // }

    subsets(nums) {
        const res = [];
        const subset = [];

        function dfs(i) {
            if (i >= nums.length) {
                res.push([...subset]);
                return;
            }

            subset.push(nums[i]);
            dfs(i + 1);

            subset.pop();
            dfs(i + 1);
        }

        dfs(0);

        return res;
    }
}
