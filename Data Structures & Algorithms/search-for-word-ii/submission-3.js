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
        const res = new Set();

        for (const word of words) {
            root.addWord(word);
        }

        const visit = new Set();


        function dfs(r, c, node, word) {
            const key = `${r},${c}`;

            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || visit.has(key) || !node.children.has(board[r][c])) {
                return;
            }
            
            const char = board[r][c];
            
            visit.add(key);
            node = node.children.get(char);
            word += char;

            if (node.isWord) {
                res.add(word);
            }
            
            const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
            for(const [rDir, cDir] of directions) {
                dfs(r + rDir, c + cDir, node, word);
            }

            visit.delete(key);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, root, "");
            }
        }

        return Array.from(res);
    }
}

class TrieNode {
    constructor() {
        this.isWord = false;
        this.children = new Map();
    }

    addWord(word) {
        let cur = this;
        
        for (const char of word) {
            if (!cur.children.has(char)) {
                cur.children.set(char, new TrieNode());
            }

            cur = cur.children.get(char);
        }

        cur.isWord = true;
    }
}
