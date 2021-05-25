const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    await createPurchase(client, {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
      },
    });
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function createPurchase(client, newPurchase) {
  const result = await client
    .db("sample_acreage")
    .collection("sample_listings")
    .insertOne(newListing);
  console.log(
    "New purchase created with the following id: ${result.insertedId}"
  );
}
