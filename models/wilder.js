import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WilderSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "le nom est requis !"],
      minLength: 4,
    },
    city: {
      type: String,
      required: [true, "La ville est requise !"],
      minlength: 2,
    },
    description: {
      type: String,
    },
    skills: [
      {
        title: String,
        votes: Number,
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("wilder", WilderSchema);
