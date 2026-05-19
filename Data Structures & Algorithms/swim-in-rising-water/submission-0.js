class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const len = grid.length;
        const shortest = {};
        const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
        minHeap.enqueue([grid[0][0], [0, 0]]);
        let time = 0;

        while (!minHeap.isEmpty()) {
            const [weight, [r, c]] = minHeap.dequeue();
            const key = `${r},${c}`

            console.log([weight, [r, c]]);
            
            if (shortest.hasOwnProperty(key)) {
                continue;
            }

            shortest[key] = weight;
            time = Math.max(time, weight);

            if (r === len - 1 && c === len - 1) {
                return time;
            }

            const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

            for (const [dr, dc] of dirs) {
                const newKey = `${r + dr}, ${c + dc}`;
                const newRow = r + dr;
                const newCol = c + dc;

                if (newRow >= len || newCol >= len || newRow < 0 || newCol < 0) {
                    continue;
                }

                if (!shortest.hasOwnProperty(newKey)) {
                    minHeap.enqueue([grid[newRow][newCol], [newRow, newCol]]);
                }
            }
        }

        console.log('shortest', shortest);

        return time;
    }
}
