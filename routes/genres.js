import express from "express";
import Movie from "../models/movie.js";
const router = express.Router();

router.get('/:genre', async (req, res) => {
    const genre = req.params.genre 
    const movies = await Movie.find({})
    res.render('genres', {movies, genre})
  })

  export default router;
