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
        const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

        function dfs(r, c) {
            if (r >= image.length || c >= image[0].length || r < 0 || c < 0 || image[r][c] !== sColor) {
                return;
            }

            image[r][c] = color;

            for (const dir of dirs) {
                const [i, j] = dir;
                dfs(r + i, c + j);
            }
        }

        dfs(sr, sc);

        return image;
    }
}
