class MyCalendar {
    constructor() {
        this.root = new Node(0, 0);
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    book(startTime, endTime) {
        return this.insert(this.root, startTime, endTime);
    }

    insert(node, start, end) {
        if (this.isOverlap(start, end, node.start, node.end)) {
            return false;
        }

        if (start >= node.end) {
            if (node.right) {
                return this.insert(node.right, start, end);
            } else {
                node.right = new Node(start, end);
            }
        } else {
            if (node.left) {
                return this.insert(node.left, start, end);
            } else {
                node.left = new Node(start, end);
            }
        }

        return true;
    }

    isOverlap(s1, e1, s2, e2) {
        // Two intervals overlap if the start of one
        // is before the end of the other, and vice versa.
        return Math.max(s1, s2) < Math.min(e1, e2);
    }
}

class Node {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.left = null;
        this.right = null;
    }
}
