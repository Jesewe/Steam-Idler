# Steam Idler
**Steam Idler** is a user-friendly tool designed to simulate activity on the Steam platform, allowing users to automatically launch selected games and appear offline.

## Features
- Logs into multiple Steam accounts sequentially.
- Sets the persona state to invisible.
- Plays a specified game (Counter-Strike 2).
- Handles errors and disconnections with appropriate messages.

## Requirements
- Node.js (version 14 or higher recommended)
- `steam-user` npm package

## Installation
1. **Clone the repository or download the script:**
   ```bash
   git clone https://github.com/Jesewe/steam-Idler.git
   cd steam-Idler
   ```

2. **Install the necessary dependencies:**
   ```bash
   npm install steam-user
   ```

## Configuration
Edit the `accounts` array in the script to include the Steam account credentials you want to use:

```javascript
const accounts = [
    { accountName: 'account1_username', password: 'account1_password' },
    { accountName: 'account2_username', password: 'account2_password' },
    // Add more accounts as needed
];
```

## Usage
1. **Run the script:**

   ```bash
   node index.js
   ```

2. **The script will:**
   - Attempt to log in to each account in the `accounts` array.
   - Set the persona state to invisible.
   - Set the game to play (Counter-Strike 2).
   - Handle any errors or disconnections and move to the next account.

## Error Handling
The script includes basic error handling:
- Logs failed login attempts.
- Handles disconnections and proceeds to the next account.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.