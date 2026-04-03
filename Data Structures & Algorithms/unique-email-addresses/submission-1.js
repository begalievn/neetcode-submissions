class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const map = new Map();

        for (const email of emails) {
            const [name, domain] = email.split('@');

            const filteredName = name.split('+')[0].split('.').join('');
            const key = `${filteredName}@${domain}`;
            map.set(key, (map.get(key) || 0) + 1);
        }

        return map.size;
    }
}
