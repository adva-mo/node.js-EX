// we will be using a JSON file for our “database”. But now we
// won't be getting the input from yards but we will get it from via
// postman inside the body.
// We will be creating a simple movie app.
// The user is able to do the following:
// ● Find all Movies
// ● Create a movie
// ● Find a single movie
// ● Update an existing movie

import express from "express";
import { moviesRouter } from "./routes/movies.route.js";
// import bodyParser from "body-parser";

const PORT = 1234;
const app = express();

app.use(express.json());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    // console.error(err);
    return res.status(400).send({ status: 404, message: err.message }); // Bad request
  }
  next();
});

app.use("/movies", moviesRouter);

app.listen(PORT, () => {
  console.log("server is up on port " + PORT);
});
