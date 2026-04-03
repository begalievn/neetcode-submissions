class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return 'EMPTY_ARRAY';

        const encoded = strs.map((item) => {
            const encodedItem = [];
            for (const char of item) {
                if (char === '') {
                    encodedItem.push('');
                    continue;
                }
                const charCode = char.charCodeAt(0);
                encodedItem.push(charCode);
            }
            
            return encodedItem.join(',');
        });

        return encoded.join('|');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === 'EMPTY_ARRAY') return [];
        
        const encodedItems = str.split('|');

        const decodedItems = encodedItems.map((item) => {
            if (item === '') return '';

            const encodedChars = item.split(',');
            const decodedChars = encodedChars.map((charCode) => String.fromCharCode(charCode));

            return decodedChars.join('');
        });

        return decodedItems;
    }
}