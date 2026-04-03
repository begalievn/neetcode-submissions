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
        const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

        function dfs(r, c) {
            if (r >= image.length || c >= image[0].length || r < 0 || c < 0) {
                return;
            }

            const curColor = image[r][c];
            if (curColor === color) {
                return;
            }
            if (curColor === sColor) {
                image[r][c] = color;

                for (const dir of dirs) {
                    const [i, j] = dir;
                    dfs(r + i, c + j);
                }
            }
        }

        dfs(sr, sc);

        return image;
    }
}
