class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const res = [];
        const perm = [];
        const count = new Map();

        nums.map((num) => count.set(num, (count.get(num) || 0) + 1));

        function dfs() {
            if (perm.length === nums.length) {
                res.push([...perm]);
                return;
            }

            for (const num of count.keys()) {
                if (count.get(num) > 0) {
                    perm.push(num);
                    count.set(num, (count.get(num) - 1));

                    dfs();

                    count.set(num, count.get(num) + 1);
                    perm.pop();
                }
            }
        }

        dfs();

        return res;
    }
 }
