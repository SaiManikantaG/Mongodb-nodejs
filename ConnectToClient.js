const { MongoClient } = require("mongodb");
const uri = "mongodb_uri";
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();
  console.log("Database list:");
  databasesList.databases.forEach(db => {
    console.log(` - ${db.name}`);
  });
}

async function main() {
  const client = new MongoClient(uri, {
    tlsAllowInvalidHostnames: true,
    tlsAllowInvalidCertificates: true,
  });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
