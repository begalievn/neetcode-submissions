class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        const mapS = new Map();
        const mapT = new Map();

        if (s.length !== t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            const valFromS = mapS.get(s[i]);
            const valFromT = mapT.get(t[i]);

            if (!valFromS && !valFromT) {
                mapS.set(s[i], `${s[i]}-${t[i]}`);
                mapT.set(t[i], `${s[i]}-${t[i]}`);
            } else if (valFromS && valFromT && valFromS === valFromT) {
                continue;
            } else {
                return false;
            }
        }

        return true;
    }
}
