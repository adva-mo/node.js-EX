`use strict`;
import mongoose from "mongoose";
import validator from "validator";

export const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: Boolean,
  details: {
    type: Object,
    description: {
      type: String,
      required: true,
      min: [10, "Must Be At Least 10,Got {VALUE}"],
    },
    price: {
      type: Number,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
  },
  images: {
    type: Array,
    min: [2, "2 Images must be inputed"],
  },
  phoneNumber: {
    type: Number,
    trim: true,
  },
  DateAdded: {
    type: Date,
  },
});

// const cellphone = new Product({
//   name: "iphone",
//   category: "mobile",
//   isActive: true,
//   details: {
//     description: "lorem",
//     price: 70,
//     discount: 10,
//   },
//   images: ["image1.jpg", "image2.jpg"],
//   phoneNumber: 972520000000,
//   Date: new Date(),
// });
// const makeup = new Product({
//   name: "chanel9",
//   category: "beauty",
//   isActive: true,
//   details: {
//     description: "lorem",
//     price: 100,
//     discount: 20,
//   },
//   images: ["image1.jpg", "image2.jpg"],
//   phoneNumber: 972520000000,
//   Date: new Date(),
// });
// const bag = new Product({
//   name: "chanel",
//   category: "accessorize",
//   isActive: false,
//   details: {
//     description: "lorem",
//     price: 500,
//   },
//   images: ["image1.jpg", "image2.jpg"],
//   phoneNumber: 972520000000,
//   Date: new Date(),
// });

// cellphone
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Product.insertMany([bag, makeup, cellphone], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`Prodcuts Succesfully Added`);
//   }
// });
