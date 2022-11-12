import * as dotenv from 'dotenv'
  dotenv.config()
import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url';
import movies from './routes/movies.js'
import mongoose from 'mongoose'
import genres from './routes/genres.js'

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname,"assets")))

app.use('/movies', movies)
app.use('/genres', genres)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('DB connected'))
  .catch((error) => console.log('DB connection error!', error))
})