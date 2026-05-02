class TrieNode {
    constructor() {
        this.word = false;
        this.children = new Map();
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
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
        let cur = this.root;
        for (const char of word) {
            if (!cur.children.has(char)) {
                return false;
            }
            cur = cur.children.get(char);
        }

        return cur.word;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;
        for (const char of prefix) {
            if (!cur.children.has(char)) {
                return false;
            }
            cur = cur.children.get(char);
        }

        return true;
    }
}
