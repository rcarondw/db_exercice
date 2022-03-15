import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import wilderRouter from "./routes/wilder.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 5002;
const app = express();
mongoose
  .connect(process.env.MONGO_URI, {
    autoIndex: true,
  })
  .then(() => console.log("Connecté à la db"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("i am working");
});

app.use("/api/wilder", wilderRouter);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
