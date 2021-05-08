const { MongoClient } = require("mongodb");

const uri = "mongodb_uri";

async function createListing(client, newListing) {
  const result = await client
    .db("playground")
    .collection("sample")
    .insertOne(newListing);
  console.log(`document has been inserted: ${result.insertedId}`);
}
async function createMultipleListings(client, newListings) {
  const result = await client
    .db("playground")
    .collection("sample")
    .insertMany(newListings);
  console.log(`${result.insertedCount} new documents has been added with ids:`);
  console.log(result.insertedIds);
}

async function main() {
  const client = new MongoClient(uri, {
    tlsAllowInvalidHostnames: true,
    tlsAllowInvalidCertificates: true,
  });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    await createListing(client, {
      id: 0,
      name: "inset only 1",
      datetime: new Date(),
    });
    await createMultipleListings(client, [
      {
        id: 1,
        name: "test 1",
        datetime: new Date(),
      },
      {
        id: 2,
        name: "test 2",
        datetime: new Date(),
      },
      {
        id: 3,
        name: "test 3",
        datetime: new Date(),
      },
    ]);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
