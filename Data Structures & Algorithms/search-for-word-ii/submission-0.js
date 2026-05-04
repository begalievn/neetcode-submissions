class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const root = new TrieNode();
        const res = [];


        function dfs(node, r, c, cache) {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || cache.has(`${r},${c}`)) {
                return;
            }

            const char = board[r][c];
            cache.set(`${r},${c}`, true);
            
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }

            const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
            for(const [rDir, cDir] of directions) {
                dfs(node.children.get(char), r + rDir, c + cDir, cache);
            }
        }

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                const cache = new Map();
                dfs(root, r, c, cache);
            }
        }

        for (const word of words) {
            let cur = root;
            let isWord = true;
            for (const char of word) {
                if (!cur.children.has(char)) {
                    isWord = false;
                    break;
                }
                cur = cur.children.get(char);
            }

            if (isWord) {
                res.push(word);
            }
        }

        return res;
    }
}

class TrieNode {
    constructor() {
        this.word = false;
        this.children = new Map();
    }
}
