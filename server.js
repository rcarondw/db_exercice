import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { wilderValidation } from "./middlewares/index.js";
import wilderController from "./controllers/wilder.js";

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

app.get("/", (req, res) => {
  res.send("i am working");
});

app.post(
  "/api/wilders/create",
  wilderValidation.create,
  wilderController.create
);

app.get("/api/wilders/getAll", wilderController.getAll);

app.get("/api/wilder/getOne/:id", wilderController.getOne);

app.listen(5002, () => {
  console.log("app listening on port 5002");
});
