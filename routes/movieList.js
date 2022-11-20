import express from "express";
import Movie from "../models/movie.js";
const router = express.Router();

router.get('/', async (req, res) => {
    const movies = await Movie.find({})
    res.render('movieList', {movies})
  })

    export default router;
