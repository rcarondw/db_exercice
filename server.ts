import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import wilderRouter from "./routes/wilder";

dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO_URI, {
    autoIndex: true,
  })
  .then(() => console.log("Connecté à la db"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/wilder", wilderRouter);

app.listen(5002, () => {
  console.log("app listening on port 5002");
});
