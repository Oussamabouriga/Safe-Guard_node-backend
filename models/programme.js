import mongoose from "mongoose";

const programme = new mongoose.Schema({
  Titre: String,
  descriptionProgramme: String,
  image: String,
});

export const Programme = mongoose.model("Programme", programme);
