/**
Find single or multiple documents from mongodb
**/

// To get all documents send query as {}
async function findOneListingByName(client, query) {
  const result = await client
    .db("confluent")
    .collection("sample")
    // Find one document using below
    // .findOne(query);
    // find multiple document using below
    .find(query)
    .forEach(function(myDoc) {
      console.log("doc: " + JSON.stringify(myDoc));
    });

  if (result) {
    console.log(`Found documents in the collections :`);
    console.log(result);
  } else {
    console.log(`No documents are found with given query: '${query}'`);
  }
}
