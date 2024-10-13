const SteamUser = require('steam-user');
const accounts = [
    { accountName: 'account1_username', password: 'account1_password' },
    { accountName: 'account2_username', password: 'account2_password' },
    // Add more accounts as needed
];

// Utility function for delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Max retry attempts per account
const MAX_RETRIES = 3;

async function login(index, retryCount = 0) {
    if (index >= accounts.length) {
        console.log('All accounts have been processed.');
        return;
    }

    const account = accounts[index];
    const user = new SteamUser();

    // Handle successful login
    user.on('loggedOn', async () => {
        console.log(`${account.accountName} - Successful login`);
        user.setPersona(SteamUser.EPersonaState.Invisible);
        user.gamesPlayed([730]); // Example: Playing CS2 (app ID 730)
        await delay(3000);  // Wait before moving to the next account
        await login(index + 1);  // Move to next account
    });

    // Handle login error
    user.on('error', async (err) => {
        console.error(`${account.accountName} - Login failed: ${err.message}`);
        await handleFailure(index, retryCount, err);
    });

    // Handle disconnection
    user.on('disconnected', async (eresult, msg) => {
        console.warn(`${account.accountName} - Disconnected: ${msg}`);
        await handleFailure(index, retryCount, msg);
    });

    // Log into Steam
    try {
        user.logOn({
            accountName: account.accountName,
            password: account.password,
        });
    } catch (err) {
        console.error(`Unexpected error: ${err.message}`);
        await handleFailure(index, retryCount, err);
    }
}

// Function to handle retries or move to the next account
async function handleFailure(index, retryCount, err) {
    if (retryCount < MAX_RETRIES) {
        console.log(`${accounts[index].accountName} - Retrying login (Attempt ${retryCount + 1}/${MAX_RETRIES})`);
        await delay(3000);  // Wait before retrying
        await login(index, retryCount + 1);  // Retry same account
    } else {
        console.log(`${accounts[index].accountName} - Maximum retries reached. Moving to next account.`);
        await delay(3000);  // Wait before moving to the next account
        await login(index + 1);  // Move to next account
    }
}

// Start login process
login(0);