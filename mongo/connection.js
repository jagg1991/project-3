// const { MongoClient } = require("mongodb");

// async function main() {
//   const uri =
//     // "mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";
//     "mongodb://localhost:27017/connect_mongodb_session_test"
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();

//     await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach((db) => console.log(" - ${db.name}"));
// }
