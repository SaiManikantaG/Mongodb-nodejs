async function updatedocument(client, query, setDocumenData) {
  const result = await client
    .db("playground")
    .collection("sample")
    .updateOne(query, { $set: setDocumenData });
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}
