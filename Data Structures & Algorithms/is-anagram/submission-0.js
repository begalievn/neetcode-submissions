class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        const mapS = new Map();
        const mapT = new Map();

        for (let i = 0; i < s.length; i++) {
            mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
            mapT.set(t[i], (mapT.get(t[i]) || 0) + 1);
        }

        const keys = Array.from(mapS.keys());
        for (const key of keys) {
            if (mapS.get(key) !== mapT.get(key)) return false;
        }

        return true;
    }
}
