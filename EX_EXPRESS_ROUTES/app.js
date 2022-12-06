const express = require("express");
const path = require("path");

const app = express();

app.get("/numbers", (req, res) => {
  res.send("data retrieved with GET");
});
app.post("/numbers", (req, res) => {
  res.send("data retrieved with POST");
});
app.delete("/numbers", (req, res) => {
  res.send("data retrieved with DELETE");
});
app.put("/numbers", (req, res) => {
  res.send("data retrieved with PUT");
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
