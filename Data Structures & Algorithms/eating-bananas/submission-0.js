class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const max = Math.max(...piles);
        let low = 0;
        let high = max;
        let res = max;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const eatingTime = this.calculateEatingTime(piles, mid);

            if (eatingTime > h) {
                low = mid + 1;
            } else if (eatingTime <= h) {
                high = mid - 1;
                res = Math.min(res, mid);
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
