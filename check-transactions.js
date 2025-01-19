const { Connection, PublicKey, clusterApiUrl } = require('@solana/web3.js');

// Adresse de votre portefeuille
const publicKey = new PublicKey('L7Y2iXu7ajhsAKjHwkBdB4ZBEwurKZ4jGfZF3EYWKaf'); // Remplacez par votre adresse publique

// Créez une connexion à Solana
const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

(async () => {
    try {
        console.log(`Récupération des transactions pour ${publicKey.toString()}...\n`);

        // Obtenez les signatures des transactions
        const signatures = await connection.getSignaturesForAddress(publicKey, { limit: 10 });

        if (signatures.length === 0) {
            console.log('Aucune transaction trouvée.');
            return;
        }

        // Affichez les détails des transactions
        for (let sig of signatures) {
            console.log(`Signature : ${sig.signature}`);
            console.log(`Bloc : ${sig.slot}`);
            console.log(`Succès : ${sig.confirmationStatus}`);
            console.log('---');
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des transactions :', error);
    }
})();

