const { Connection, clusterApiUrl, Keypair } = require('@solana/web3.js');

const secretKey = new Uint8Array([
    208, 63, 124, 30, 222, 214, 58, 60, 189, 200, 43, 92, 43, 218, 148, 181,
    144, 246, 255, 61, 213, 75, 225, 6, 243, 64, 93, 81, 57, 72, 84, 76, 4,
    229, 108, 172, 216, 244, 233, 53, 251, 196, 2, 217, 167, 117, 63, 156, 62,
    25, 170, 68, 50, 95, 200, 95, 179, 71, 138, 51, 135, 149, 48, 64
]);
const connection = new Connection(clusterApiUrl('mainnet-beta'));
const keypair = Keypair.fromSecretKey(secretKey);

(async () => {
    const balance = await connection.getBalance(keypair.publicKey);
    console.log(`Solde : ${balance} lamports`);
})();

