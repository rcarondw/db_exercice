"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_js_1 = require("./middlewares/index.js");
const wilder_js_1 = __importDefault(require("./controllers/wilder.js"));
dotenv_1.default.config();
const app = express_1.default();
mongoose_1.default
    .connect(process.env.MONGO_URI, {
    autoIndex: true,
})
    .then(() => console.log("Connecté à la db"))
    .catch((err) => console.log(err));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("i am working");
});
app.post("/api/wilders/create", index_js_1.wilderValidation.create, wilder_js_1.default.create);
app.get("/api/wilders/getAll", wilder_js_1.default.getAll);
app.get("/api/wilder/getOne/:id", wilder_js_1.default.getOne);
app.listen(5002, () => {
    console.log("app listening on port 5002");
});
