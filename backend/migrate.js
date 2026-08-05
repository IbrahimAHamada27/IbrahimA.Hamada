const { MongoClient } = require('mongodb');

const LOCAL_URI = 'mongodb://127.0.0.1:27017/portfolio_db';
const REMOTE_URI = 'mongodb://elkoptanmobilestore:elkoptanmobilestore123@ac-gns3xwd-shard-00-00.fzksb9k.mongodb.net:27017,ac-gns3xwd-shard-00-01.fzksb9k.mongodb.net:27017,ac-gns3xwd-shard-00-02.fzksb9k.mongodb.net:27017/MyPortfolio?ssl=true&replicaSet=atlas-12s0gg-shard-0&authSource=admin&retryWrites=true&w=majority';

async function migrate() {
    console.log('Starting migration...');
    const localClient = new MongoClient(LOCAL_URI);
    const remoteClient = new MongoClient(REMOTE_URI);

    try {
        await localClient.connect();
        console.log('Connected to local DB');
        const localDb = localClient.db();

        await remoteClient.connect();
        console.log('Connected to remote DB');
        const remoteDb = remoteClient.db();

        const collections = await localDb.listCollections().toArray();
        
        for (let collInfo of collections) {
            const collectionName = collInfo.name;
            console.log(`Migrating collection: ${collectionName}`);
            
            const localCollection = localDb.collection(collectionName);
            const remoteCollection = remoteDb.collection(collectionName);

            // Fetch all documents from local
            const docs = await localCollection.find({}).toArray();
            
            if (docs.length > 0) {
                // Optional: clear remote collection first
                await remoteCollection.deleteMany({});
                // Insert to remote
                await remoteCollection.insertMany(docs);
                console.log(`Successfully migrated ${docs.length} documents for ${collectionName}`);
            } else {
                console.log(`Collection ${collectionName} is empty, skipping.`);
            }
        }
        
        console.log('Migration completed successfully!');

    } catch (error) {
        console.error('Error during migration:', error);
    } finally {
        await localClient.close();
        await remoteClient.close();
    }
}

migrate();
