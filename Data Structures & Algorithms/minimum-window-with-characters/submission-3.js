class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const need = new Map();
        const freqMap = new Map();
        let res = [];

        for (const char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        let l = 0;

        for (let r = 0; r < s.length; r++) {
            if (need.has(s[r])) {
                freqMap.set(s[r], (freqMap.get(s[r]) || 0) + 1);
            }

            while (this.checkMaps(freqMap, need)) {
                if (res.length == 0) {
                    res = [l, r];
                } else {
                    const cur = r - l + 1;
                    if (cur < (res[1] - res[0] + 1)) {
                        res[0] = l;
                        res[1] = r;
                    }
                }

                if (freqMap.has(s[l])) {
                    freqMap.set(s[l], freqMap.get(s[l]) - 1);
                }
                
                l++;
            }
        }

        if (res.length === 0) return '';

        return s.substring(res[0], res[1] + 1);
    }

    checkMaps(have, need) {
        for (const key of need.keys()) {
            if (!have.get(key) || have.get(key) < need.get(key)) return false;
        }

        return true;
    }
}
