class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        return this.helper(0, nums);
    }

    helper(i, nums) {
        if (i === nums.length) {
            return [[]];
        }

        const resPerms = [];
        const perms = this.helper(i + 1, nums);
        for (let p of perms) {
            for (let j = 0; j < p.length + 1; j++) {
                const pCopy = [...p];
                pCopy.splice(j, 0, nums[i]);
                resPerms.push(pCopy);
            }
        }

        return resPerms;
    }
}

