<div align="center">
   <img src="src/img/icon.png" alt="Steam Idler" width="200" height="200">
   <h1>Steam Idler</h1>
   <p>Simulate activity on Steam by automatically logging into accounts, setting status to invisible, and playing a specified game.</p>
   <a href="#features"><strong>Features</strong></a> •
   <a href="#installation"><strong>Installation</strong></a> •
   <a href="#configuration"><strong>Configuration</strong></a> •
   <a href="#usage"><strong>Usage</strong></a>
</div>

---

# Overview
**Steam Idler** is a tool that automates the process of logging into multiple Steam accounts, setting the persona state to invisible, and simulating gameplay for a specified game.

## Features
- Automates login for multiple Steam accounts.
- Sets persona state to invisible to appear offline.
- Simulates gameplay for *Counter-Strike 2* (or any game via the app ID).
- Built-in error handling and retry mechanisms for failed login attempts and disconnections.

## Requirements
- Node.js (version 14 or higher recommended)
- `steam-user` npm package

## Installation
1. **Clone the repository or download the code:**
   ```bash
   git clone https://github.com/Jesewe/Steam-Idler.git
   cd Steam-Idler
   ```

2. **Install the required dependencies:**
   ```bash
   npm install
   ```

## Configuration
Edit the `accounts` array in `index.js` to include the credentials for the Steam accounts you want to automate:

```javascript
const accounts = [
    { accountName: 'account1_username', password: 'account1_password' },
    { accountName: 'account2_username', password: 'account2_password' },
    // Add more accounts as needed
];
```

To modify the game being simulated, update the `gamesPlayed` function to include the app ID for the desired game. For example, for *Counter-Strike 2* (app ID 730):

```javascript
user.gamesPlayed([730]);
```

## Usage
1. **Run the script:**
   ```bash
   node index.js
   ```

2. **Script behavior:**
   - Logs into each account in the `accounts` array.
   - Sets persona state to invisible.
   - Simulates gameplay for the specified game (default: *Counter-Strike 2*).
   - Retries up to 3 times on login failures or disconnections before proceeding to the next account.

## Error Handling
- Automatically retries failed login attempts up to 3 times.
- Logs any login errors or disconnections and moves to the next account when retries are exhausted.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.