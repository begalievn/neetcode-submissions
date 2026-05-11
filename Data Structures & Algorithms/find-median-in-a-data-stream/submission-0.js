
class MedianFinder {
    constructor() {
        this.small = new MaxHeap();
        this.large = new MinHeap();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.small.insert(num);
        if (this.small.size() && this.large.size() && this.small.getMax() > this.large.getMin()) {
            const val = this.small.remove();
            this.large.insert(val);
        }

        if (this.small.size() > this.large.size() + 1) {
            const val = this.small.remove();
            this.large.insert(val);
        }

        if (this.large.size() > this.small.size() + 1) {
            const val = this.large.remove();
            this.small.insert(val);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.getMax();
        } else if (this.large.size() > this.small.size()) {
            return this.large.getMin();
        } else {
            return (this.small.getMax() + this.large.getMin()) / 2;
        }
    }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }
 
  // Helpers ─────────────────────────────────────
  #parentIdx(i)      { return Math.floor((i - 1) / 2); }
  #leftChildIdx(i)   { return 2 * i + 1; }
  #rightChildIdx(i)  { return 2 * i + 2; }
  #swap(i, j)        { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }
 
  // Bubble a node up until the heap property is restored
  #bubbleUp(i) {
    while (i > 0) {
      const p = this.#parentIdx(i);
      if (this.heap[p] > this.heap[i]) {
        this.#swap(p, i);
        i = p;
      } else break;
    }
  }
 
  // Sink a node down until the heap property is restored
  #sinkDown(i) {
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const l = this.#leftChildIdx(i);
      const r = this.#rightChildIdx(i);
      if (l < n && this.heap[l] < this.heap[smallest]) smallest = l;
      if (r < n && this.heap[r] < this.heap[smallest]) smallest = r;
      if (smallest !== i) {
        this.#swap(i, smallest);
        i = smallest;
      } else break;
    }
  }
 
  // Public API ──────────────────────────────────
 
  /** Insert a value – O(log n) */
  insert(value) {
    this.heap.push(value);
    this.#bubbleUp(this.heap.length - 1);
  }
 
  /** Return (but do not remove) the minimum – O(1) */
  getMin() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }
 
  /** Remove and return the minimum – O(log n) */
  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
 
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();   // move last element to root
    this.#sinkDown(0);
    return min;
  }
 
  size()    { return this.heap.length; }
  isEmpty() { return this.heap.length === 0; }
}
 
 
// ─────────────────────────────────────────────
//  MaxHeap  –  root is always the largest value
// ─────────────────────────────────────────────
class MaxHeap {
  constructor() {
    this.heap = [];
  }
 
  // Helpers ─────────────────────────────────────
  #parentIdx(i)      { return Math.floor((i - 1) / 2); }
  #leftChildIdx(i)   { return 2 * i + 1; }
  #rightChildIdx(i)  { return 2 * i + 2; }
  #swap(i, j)        { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }
 
  #bubbleUp(i) {
    while (i > 0) {
      const p = this.#parentIdx(i);
      if (this.heap[p] < this.heap[i]) {   // ← only difference from MinHeap
        this.#swap(p, i);
        i = p;
      } else break;
    }
  }
 
  #sinkDown(i) {
    const n = this.heap.length;
    while (true) {
      let largest = i;
      const l = this.#leftChildIdx(i);
      const r = this.#rightChildIdx(i);
      if (l < n && this.heap[l] > this.heap[largest]) largest = l;   // ← and here
      if (r < n && this.heap[r] > this.heap[largest]) largest = r;
      if (largest !== i) {
        this.#swap(i, largest);
        i = largest;
      } else break;
    }
  }
 
  // Public API ──────────────────────────────────
 
  /** Insert a value – O(log n) */
  insert(value) {
    this.heap.push(value);
    this.#bubbleUp(this.heap.length - 1);
  }
 
  /** Return (but do not remove) the maximum – O(1) */
  getMax() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }
 
  /** Remove and return the maximum – O(log n) */
  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
 
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.#sinkDown(0);
    return max;
  }
 
  size()    { return this.heap.length; }
  isEmpty() { return this.heap.length === 0; }
}