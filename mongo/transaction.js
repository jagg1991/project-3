const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    //Connect to MongoDb cluster
    await client.connect();
    //Make appropriate Db calls
    await createReservation(
      client,
      "matthew@example.com",
      "I Love the Moon",
      [new Date("5-22-2021"), new Date("5-21-2021")],
      { pricePerAcre: 1000000 }
    );
  } finally {
    //Close connection to mongoDb cluster
    await client.close();
  }
}

main.apply().catch(console.error);

async function createReservation(
  client,
  nameOfListing,
  reservationDates,
  reservationDetails
) {
  const usersCollection = client.db("sample_acreage").collection("users");
  const listingsAndReviewsCollection = client
    .db("sample_acreage")
    .collection("users");
  const reservation = createReservationDocument(
    nameOfListing,
    reservationDates,
    reservationDetails
  );
  const session = client.startSession();
  const transactionOptions = {
    readPreferences: "primary",
    readConcerns: { level: "local" },
    writeConcerns: { w: "majority" },
  };

  try {
    const transactionResults = await session.withTransaction(async () => {
      // Add a reservation to the reservations array for the appropriate document in the users collection
      const usersUpdateResults = await usersCollection.updateOne(
        { email: userEmail },
        { $addToSet: { reservations: reservation } },
        { session }
      );
      console.log(
        `${usersUpdateResults.matchedCount} document(s) found in the users collection with the email address ${userEmail}.`
      );
      console.log(
        `${usersUpdateResults.modifiedCount} document(s) was/were updated to include the reservation.`
      );

      // Check if the Airbnb listing is already reserved for those dates. If so, abort the transaction.
      const isListingReservedResults =
        await listingsAndReviewsCollection.findOne(
          { name: nameOfListing, dateReserved: { $in: reservationDate } },
          { session }
        );
      if (isListingReservedResults) {
        await session.abortTransaction();
        console.error(
          "This listing has already been reserved. Reservation could not be created"
        );
        console.error(
          "Any operation that already occurred as part of this transaction will be rolled back."
        );
        return;
      }

      //  Add the reservation dates to the datesReserved array for the appropriate document in the listingsAndRewiews collection
      const listingsAndReviewsUpdateResults =
        await listingsAndReviewsCollection.updateOne(
          { name: nameOfListing },
          { $addToSet: { datesReserved: { $each: reservationDates } } },
          { session }
        );
      console.log(
        `${listingsAndReviewsUpdateResults.matchedCount} document(s) found in the listingsAndReviews collection with the name ${nameOfListing}.`
      );
      console.log(
        `${listingsAndReviewsUpdateResults.modifiedCount} document(s) was/were updated to include the reservation dates.`
      );
    }, transactionOptions);

    if (transactionResults) {
      console.log("The reservation was successfully created.");
    } else {
      console.log("The transaction was intentionally aborted.");
    }
  } catch (e) {
    console.log("The transaction was aborted due to an unexpected error: " + e);
  } finally {
    // Step 4: End the session
    await session.endSession();
  }
}

function createReservationDocument(
  nameOfListing,
  reservationDates,
  reservationDetails
) {
  // Create the reservation
  let reservation = {
    name: nameOfListing,
    dates: reservationDates,
  };

  // Add additional properties from reservationDetails to the reservation
  for (let detail in reservationDetails) {
    reservation[detail] = reservationDetails[detail];
  }

  return reservation;
}
