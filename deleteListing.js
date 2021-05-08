async function deleteListingByName(client, nameOfListing) {
  const result = await client
    .db("playground")
    .collection("sample")
    .deleteOne({ name: nameOfListing });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}
