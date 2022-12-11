import express from "express";

import { getCityWeather } from "./controllers.js";
const PORT = 1234;
const app = express();

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    // console.error(err);
    return res.status(400).send({ status: 404, message: err.message }); // Bad request
  }
  next();
});

app.get("/weather/:city", getCityWeather);

app.listen(PORT, () => {
  console.log("server is up on port " + PORT);
});
