import express from 'express'
import Movie from "../models/movie.js";
const router = express.Router()

// Create movie

router.post("/", async (req, res) => {
  await Movie.create({
    name: req.body.name,
    year: req.body.year,
    rating: req.body.rating,
    photo: req.body.photo,
    genre: req.body.genre,
  });
   res.redirect('/movieList')
});

// Find / render all movies

router.get("/", async (req, res) => {
  const movies = await Movie.find({});
  res.render("index", { movies });
});

// Find / render one movie (by id)

router.get("/:id", async (req, res) => {
  const movie = await Movie.findOne({ _id: req.params.id });
  res.send({ movie });
});

// Update one movie (by id)

router.patch("/:id", async (req, res) => {
  const movie = await Movie.updateOne({ 
    _id: req.params.id,
    name: req.body.name,
    year: req.body.year,
    rating: req.body.rating,
    photo: req.body.photo,
    genre: req.body.genre});
    res.send({movie})
});

// Delete one movie (by id)

router.delete("/:id", async (req, res) => {
  const movie = await Movie.deleteOne({ _id: req.params.id });
  res.send({ movie });
});

export default router;
