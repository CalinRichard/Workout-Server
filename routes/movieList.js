import express from "express";
import Movie from "../models/movie.js";
const router = express.Router();

router.post("/", async (req, res) => {
    await Movie.create({
      name: req.body.name,
      year: req.body.year,
      rating: req.body.rating,
      photo: req.body.photo,
      genre: req.body.genre,
    });
    res.send("ok");
    res.redirect('/movieList')
  });

router.get('/', async (req, res) => {
    const movies = await Movie.find({})
    res.render('movieList', {movies})
  })

  export default router;
