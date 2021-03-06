import express from "express";
import { wilderValidation } from "../middlewares/index.js";
import wilderController from "../controllers/wilder.js";

const router = express.Router();

router.post("/create", wilderValidation.create, wilderController.create);

router.get("/getAll", wilderController.getAll);

router.get("/getOne/:_id", wilderController.getOne);

router.put("/updateOne/:_id", wilderController.update);

router.delete("/delete/:_id", wilderController.delete);

export default router;
