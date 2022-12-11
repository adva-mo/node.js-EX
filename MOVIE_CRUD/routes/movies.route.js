import { Router } from "express";

import {
  getAllMovies,
  findMovie,
  addMovie,
  updateMovie,
} from "../controllers/movies.controller.js";

export const moviesRouter = Router();

moviesRouter.get("", getAllMovies);

moviesRouter.get("/:id", findMovie);

moviesRouter.post("", addMovie);

moviesRouter.put("/:id", updateMovie);
