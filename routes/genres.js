import express from "express";
import Movie from "../models/movie.js";
const router = express.Router();

const schema = new mongoose.Schema({name: 'string', year: 'number', rating: 'number', photo: 'string', genre: Array})
const Movie = mongoose.model('Movie', schema)

router.get('/:genre', async (req, res) => {
    const genre = req.params.genre 
    const movies = await Movie.find({})
    res.render('genres', {movies, genre})
  })

  export default router;
