class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const res = [];
        const cur = [];

        function dfs(i) {
            if (i >= nums.length) {
                res.push([...cur]);
                return;
            }

            cur.push(nums[i]);
            dfs(i + 1);
            cur.pop();

            while (i < nums.length - 1  && nums[i] === nums[i + 1]) {
                i++;
            }
            dfs(i + 1);
        } 

        dfs(0);

        return res;
    }
}
