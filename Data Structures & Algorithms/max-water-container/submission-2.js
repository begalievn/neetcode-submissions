class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const cur = Math.min(heights[l], heights[r]) * (r - l);
            max = Math.max(cur, max);
            
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}
