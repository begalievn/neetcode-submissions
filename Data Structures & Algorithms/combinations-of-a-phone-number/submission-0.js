class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const len = digits.length;

        if (len === 0) return [];

        const res = [];
        const map = new Map();
        const letters = [
            [],
            ["a", "b", "c"],
            ["d", "e", "f"],
            ["g", "h", "i"],
            ["j", "k", "l"],
            ["m", "n", "o"],
            ['p', 'q', 'r', 's'],
            ['t', 'u', 'v'],
            ['w', 'x', 'y', 'z'],
        ];

        for (let i = 2; i <= 9; i++) {
            map.set(i, letters[i - 1]);
        };

        function backtrack(i, cur) {
            if (cur.length === len) {
                res.push(cur.join(''));
                return;
            }
            if (i > len) return;

            const curDigit = Number(digits[i]);
            const curLetters = map.get(curDigit);
            for (const letter of curLetters) {
                cur.push(letter);
                backtrack(i+1, cur);
                cur.pop();
            }
        }

        backtrack(0, []);

        return res;
    }
}
