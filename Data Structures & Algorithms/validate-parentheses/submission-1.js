class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = new Map();
        const brackets = [['(', ')'], ['[', ']'], ['{', '}']];
        for (const pair of brackets) {
            map.set(pair[1], pair[0]);
        }

        for (const bracket of s) {
            const isOpening = !map.has(bracket);
            if (isOpening) {
                stack.push(bracket);
            } else {
                const last = stack.pop();
                if (map.get(bracket) !== last) return false;
            }
        }

        return stack.length === 0;
    }
}
