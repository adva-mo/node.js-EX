import express from "express";
import { Product } from "./models/Product.js";
import { mongooseConnect } from "./db/mongoose.js";

const app = express();
const port = process.env.port || 4000;

mongooseConnect();

app.use(express.json());

app.post("/products", (req, res) => {
  const product = new Product(req.body);
  console.log(product);
  product
    .save()
    .then(() => {
      res.send(product);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/products", (req, res) => {
  console.log("get");
  Product.find({})
    .then((response) => {
      console.log(res);
      res.status(201).send(response);
    })
    .catch((e) => {
      res.status(401).send(e);
    });
});

app.get("/products/get/:id", (req, res) => {
  const _id = req.params.id;
  Product.findById(_id)
    .then((response) => {
      if (!response) return res.status(404).send();
      res.status(201).send(response);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get("/products/active", (req, res) => {
  Product.find({ isActive: req.query.active })
    .then((response) => {
      if (!response) return res.status(404).send();
      res.status(201).send(response);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get("/products/range", (req, res) => {
  Product.find({
    "details.price": { $gt: Number(req.query.from), $lt: Number(req.query.to) },
  })
    .then((response) => {
      if (!response) return res.status(404).send();
      res.status(201).send(response);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.listen(port, () => {
  console.log("server is up on port " + port);
});
