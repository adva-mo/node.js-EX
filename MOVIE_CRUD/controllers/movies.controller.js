import data from "../DB/movies.json" assert { type: "json" };
import fs from "fs";

export const getAllMovies = (req, res) => {
  res.status(200).send(data);
};

export const findMovie = (req, res) => {
  const { id } = req.params;
  const movie = data.find((movie) => movie.id === "" + id);
  if (movie) res.status(200).send(movie);
  else res.status(404).send("movie not found");
};

export const addMovie = async (req, res) => {
  //   console.log(req.body);
  try {
    // const newData = [...data, req.body];
    // console.log(newData);
    // const jsonData = JSON.stringify(newData);
    // fs.writeFile("../DB/movies.json", jsonData, () => {
    //   res.status(200).send(req.body);
    // });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

export const updateMovie = (req, res) => {};
