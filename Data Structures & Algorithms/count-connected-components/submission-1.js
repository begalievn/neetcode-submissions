class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const uf = new UnionFind(n);
        for (const edge of edges) {
            const [n1, n2] = edge;
            uf.union(n1, n2);
        }

        const set = new Set();
        for (let i = 1; i < n; i++) {
            const parent = uf.find(i);
            console.log('parent', parent);
            set.add(parent);
        }

        return set.size;
    }
}

class UnionFind {
    constructor(n) {
        this.par = new Map();
        this.rank = new Map();
        
        for (let i = 0; i < n; i++) {
            this.par.set(i, i);
            this.rank.set(i, 0);
        }
    }

    find(x) {
        if (x !== this.par.get(x)) {
            this.par.set(x, this.find(this.par.get(x)));
        }

        return this.par.get(x);
    }

    union(n1, n2) {
        let p1 = this.find(n1);
        let p2 = this.find(n2);

        if (p1 === p2) {
            return false;
        }

        if (this.rank.get(p1) > this.rank.get(p2)) {
            this.par.set(p2, p1);
        } else if (this.rank.get(p1) < this.rank.get(p2)) {
            this.par.set(p1, p2);
        } else {
            this.par.set(p1, p2);
            this.rank.set(p2, this.rank.get(p2) + 1);
        }

        return true;
    }
}

