import { MongoClient, ObjectId } from "mongodb";

const connectionURL = "mongodb://localhost:27017";
const client = new MongoClient(connectionURL);
const databaseName = "blog";

//  '0': new ObjectId("6397365dd7e19c1d2e4ca03a"),
//     '1': new ObjectId("6397365dd7e19c1d2e4ca03b")

client.connect((error, client) => {
  if (error) return console.log(error.message);

  const db = client.db(databaseName);
  // const collection = db.collection("users");

  // collection.insertMany(
  //   [
  //     {
  //       email: "jane@doe.com",
  //       name: "jane",
  //       lastName: "doe",
  //       posts: [],
  //     },
  //     {
  //       email: "bob@doe.com",
  //       name: "bob",
  //       lastName: "doe",
  //       posts: [],
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) return console.log(error.message);
  //     console.log(result);
  //   }
  // );

  // const postsCollection = db.collection("posts");

  // postsCollection.insertMany(
  //   [
  //     {
  //       title: "my sunday",
  //       writerId: ObjectId("6397365dd7e19c1d2e4ca03a"),
  //       description: "was  amazing",
  //       comments: [],
  //     },
  //     {
  //       title: "my monday",
  //       writerId: ObjectId("6397365dd7e19c1d2e4ca03a"),
  //       description: "was even more amazing",
  //       comments: [],
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) return console.log(error.message);
  //     console.log(result);
  //   }
  // );

  const postsCollection = db.collection("posts");

  // postsCollection.updateOne(
  //   { _id: ObjectId("639738390c5f71c49bffd7e3") },
  //   { $push: { comments: { writer: "", content: "good to hear" } } }
  // ),
  //   (error, result) => {
  //     if (error) return console.log(error.message);
  //     console.log(result);
  //   };
});
