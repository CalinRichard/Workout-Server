import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: "string",
  year: "number",
  rating: "number",
  photo: "string",
  genre: "string",
});

export default mongoose.model("Movie", schema);
