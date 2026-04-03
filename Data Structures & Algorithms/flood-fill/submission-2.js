class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const sColor = image[sr][sc];
        if (sColor === color) return image;
        const rowLen = image.length;
        const colLen = image[0].length;

        function dfs(r, c) {
            if (r >= rowLen || c >= colLen || r < 0 || c < 0 || image[r][c] !== sColor) {
                return;
            }

            image[r][c] = color;
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }

        dfs(sr, sc);

        return image;
    }
}
