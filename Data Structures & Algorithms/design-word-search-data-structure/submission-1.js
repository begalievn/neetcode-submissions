class TrieNode {
    constructor() {
        this.word = false;
        this.children = new Map();
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;

        for (const char of word) {
            if (!cur.children.has(char)) {
                cur.children.set(char, new TrieNode());
            }

            cur = cur.children.get(char);
        }
        cur.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, 0, this.root);
    }

    dfs(word, j, root) {
        let cur = root;

        for (let i = j; i < word.length; i++) {
            const char = word[i];
            if (char === '.') {
                for (const child of cur.children.values()) {
                    if (this.dfs(word, i + 1, child)) {
                        return true;
                    }
                }

                return false;
            } else {
                if (!cur.children.has(char)) {
                    return false;
                }
                cur = cur.children.get(char);
            }
        }

        return cur.word;
    }
}
