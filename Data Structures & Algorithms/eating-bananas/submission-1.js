class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 0;
        let high = Math.max(...piles);
        let res = high;

        while (low <= high) {
            const k = Math.floor((low + high) / 2);
            const eatingTime = this.calculateEatingTime(piles, k);

            if (eatingTime <= h) {
                high = k - 1;
                res = Math.min(res, k);
            } else {
                low = k + 1;
            }
        }

        return res;
    }

    calculateEatingTime(piles, k) {
        let count = 0;

        for (const pile of piles) {
            count += Math.ceil(pile / k);
        }

        return count;
    }
}
