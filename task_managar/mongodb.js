import { MongoClient, ObjectId } from "mongodb";
// const mongoClient = mongodb.mongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionURL);
const databaseName = "task-manager";

// const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());
//! CREATE
// client.connect((error, client) => {
//   if (error) return console.log(error.message);
//   console.log("connected correctly");

// const db = client.db(databaseName);
// const collection = db.collection("users");

// collection.insertOne({ name: "adva", age: 30 }, (error, result) => {
//   if (error) returnconsole.log(error.message);
// console.log(result);
// });

collection.insertMany(
  [
    { name: "adva", age: 30 },
    { name: "andrew", age: 20 },
  ],
  (error, result) => {
    if (error) return console.log(error.message);
    console.log(result);
  }
);
// });

//? mongodb uses a speacial algorythm that generates id values, it works in such a way that its impossible two documents will
//? have the same id value over different databases.
//? the object id stores the id number which really is a binary representation behind the scens. we can get to its value by objectId.id()  .toHexString()

//! READ
client.connect((error, client) => {
  if (error) return console.log(error.message);

  const db = client.db(databaseName);
  const collection = db.collection("users");

  // collection.findOne(
  //   { _id: ObjectId("63970488ab86c87d97e8654b") },
  //   (error, user) => {
  //     if (error) return console.log("unable to fetch");
  //     console.log(user);
  //   }
  // );

  // collection.findOne({ name: "andrew", age: 1 }, (error, user) => {
  //   if (error) return console.log("unable to fetch");
  //   console.log(user);
  // });

  collection.find({ age: 30 }).count((error, users) => {
    if (error) return console.log("unable to fetch");
    console.log(users);
  });
  // collection.find({ age: 30 }).toArray((error, users) => {
  //   if (error) return console.log("unable to fetch");
  //   console.log(users);
  // });

  console.log("connected correctly");
});

//? when using find(), the results we are getting is a cursor, its a pointer to the tada in the db,its an array of references, so we can do operations. dont need to provid cb function

//! UPDATE

client.connect((error, client) => {
  if (error) return console.log(error.message);

  const db = client.db(databaseName);
  const collection = db.collection("users");
  //updateOne
  const newUpdate = collection.updateMany(
    { name: "adva" },
    { $set: { name: "adva mozes" } }
  );
  newUpdate
    .then(() => {
      console.log("ok");
    })
    .catch(() => {
      console.log("failed");
    });

  console.log("connected correctly");
});

//! DELETE

client.connect((error, client) => {
  if (error) return console.log(error.message);

  const db = client.db(databaseName);
  const collection = db.collection("users");
});
