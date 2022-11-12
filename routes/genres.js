import express from 'express'
import mongoose, { mongo } from 'mongoose'
const router = express.Router()

const schema = new mongoose.Schema({name: 'string', year: 'number', rating: 'number', photo: 'string', genre: 'string'})
const Genre = mongoose.model('Genre', schema)

router.get('/', async (req, res) => {
    const movies = await Genre.find({})
    res.render('actionMovies', {movies})
  })

  export default router;