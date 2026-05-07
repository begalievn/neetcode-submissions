class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const parent = new Map();
        const accNames = new Map();

        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];
            let accountId = `account${i}`;
            const name = account[0];
            const emails = account.slice(1);
            let parentAccount = null;

            for (const email of emails) {
                if (parent.has(email)) {
                    parentAccount = parent.get(email);
                }
            }

            if (parentAccount) {
                const { name } = parentAccount;
                accountId = parentAccount.accountId;
                const accountData = accNames.get(name);
                for (const email of emails) {
                    accountData[accountId].add(email);
                }
            } else {
                let accData = {};

                if (accNames.has(name)) {
                    accData = accNames.get(name);
                }

                accData[accountId] = new Set(emails);
                accNames.set(name, accData);
            }

            for (const email of emails) {
                parent.set(email, { name, accountId });
            }
        }

        const res = [];

        for (const name of accNames.keys()) {
            const accounts = accNames.get(name);
            
            for (const accountId of Object.keys(accounts)) {
                const account = [name, ...Array.from(accounts[accountId]).sort()];
                res.push(account);
            }
        }

        console.log(parent);
        console.log(accNames);

        return res;
    }
}
