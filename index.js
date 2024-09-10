const SteamUser = require('steam-user');
const accounts = [
    { accountName: 'account1_username', password: 'account1_password' },
    { accountName: 'account2_username', password: 'account2_password' },
    // Add more accounts as needed
];

// Utility function for a delay between logins
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function login(index) {
    if (index < accounts.length) {
        const account = accounts[index];
        const user = new SteamUser();

        user.on('loggedOn', () => {
            console.log(`${account.accountName} - Successful login`);
            user.setPersona(SteamUser.EPersonaState.Invisible);  // 1 - online, 7 - invisible
            user.gamesPlayed([730]);  // List app IDs (730 is CS2)
            // Move on to the next account after a delay
            delay(3000).then(() => login(index + 1));
        });

        user.on('error', (err) => {
            console.error(`${account.accountName} - Login failed: ${err.message}`);
            // Attempt to log in to the next account after a delay
            delay(3000).then(() => login(index + 1));
        });

        user.on('disconnected', (eresult, msg) => {
            console.warn(`${account.accountName} - Disconnected: ${msg}`);
            // Move to the next account on disconnect
            delay(3000).then(() => login(index + 1));
        });

        user.logOn({
            accountName: account.accountName,
            password: account.password,
        });
    } else {
        console.log('All accounts have been processed.');
    }
}

// Start the login process with the first account
login(0);