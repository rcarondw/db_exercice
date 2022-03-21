"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../middlewares/index");
const wilder_1 = __importDefault(require("../controllers/wilder"));
const router = express_1.default.Router();
router.post("/create", index_1.wilderValidation.create, wilder_1.default.create);
router.get("/getAll", wilder_1.default.getAll);
router.get("/getOne/:_id", wilder_1.default.getOne);
router.put("/updateOne/:_id", wilder_1.default.update);
router.delete("/delete/:_id", wilder_1.default.delete);
exports.default = router;
