class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        
        function dfs(i, cur, total) {
            if (total === target) {
                res.push([...cur]);
                return;
            }
            if (i >= nums.length || total > target) {
                return;
            }

            cur.push(nums[i]);
            dfs(i, cur, total + nums[i]);
            cur.pop();
            dfs(i + 1, cur, total);
        }

        dfs(0, [], 0);

        return res;
    }

}
