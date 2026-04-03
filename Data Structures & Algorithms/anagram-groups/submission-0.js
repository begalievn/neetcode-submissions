class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            let sorted = str.split('').sort().join('');
            map.set(sorted, [...(map.get(sorted) || []), str]);
        }

        return Array.from(map.values());
    }
}
