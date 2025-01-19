const { Connection, clusterApiUrl } = require('@solana/web3.js');

(async () => {
    const connection = new Connection(clusterApiUrl('mainnet-beta'));
    const version = await connection.getVersion();
    console.log('Version du cluster:', version);
})();


