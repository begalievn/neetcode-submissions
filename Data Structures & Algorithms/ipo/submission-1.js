class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const projects = profits.map((p, i) => [capital[i], p]);
        projects.sort((a, b) => a[0] - b[0]);
        const maxHeap = new MaxPriorityQueue();

        let projectIdx = 0;

        for (let i = 0; i < k; i++) {
            while (projectIdx < projects.length && w >= projects[projectIdx][0]) {
                const profit = projects[projectIdx][1];
                maxHeap.enqueue(profit);
                projectIdx++;
            }

            if (!maxHeap.isEmpty()) {
                const value = maxHeap.dequeue();
                w += value;
            }
        }

        return w;
    }
}
