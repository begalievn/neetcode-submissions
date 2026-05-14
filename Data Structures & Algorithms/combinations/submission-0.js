class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];
        const cur = [];

        function helper(i) {
            if (cur.length === k) {
                res.push([...cur]);
                return;
            }
            if (i > n) return;

            for (let j = i; j <= n; j++) {
                cur.push(j);
                helper(j + 1);
                cur.pop();
            }
        }

        helper(1);

        return res;
    }
}
