import mongoose from "mongoose";

export const mongooseConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/task-managar-api")
    .then((res) => {
      console.log("connection succesfull");
    })
    .catch((e) => {
      console.log(e);
    });
};
