class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    // climbStairs(n) {
    //     const map = new Map();

    //     function recursion(n) {
    //         if (n < 0) return 0;
    //         if (n === 0) return 1;

    //         if (map.has(n)) {
    //             return map.get(n);
    //         }

    //         const left = recursion(n - 1);
    //         const right = recursion(n - 2);

    //         const result = left + right;
    //         map.set(n, result);

    //         return result;
    //     }

    //     return recursion(n);
    // }

    // climbStairs(n) {
    //     let one = 1;
    //     let two = 1;

    //     for (let i = n - 1; i > 0; i--) {
    //         const temp = one;
    //         one = one + two;
    //         two = temp;
    //     }

    //     return one;
    // }

    climbStairs(n) {
        const cache = new Map();

        return this.memoization(n, cache);
    }

    memoization(n, cache) {
        if (n < 0) return 0;
        if (n === 0) return 1;

        if (cache.has(n)) {
            return cache.get(n);
        }

        const res = this.memoization(n - 1, cache) + this.memoization(n - 2, cache);
        cache.set(n, res);

        return res;
    }
}
