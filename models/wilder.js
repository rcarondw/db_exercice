import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WilderSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "le nom est requis !"],
    },
    city: {
      type: String,
      required: [true, "La ville est requise !"],
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
