"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const wilder_1 = __importDefault(require("./routes/wilder"));
dotenv_1.default.config();
const app = (0, express_1.default)();
mongoose_1.default
    .connect(process.env.MONGO_URI, {
    autoIndex: true,
})
    .then(() => console.log("Connecté à la db"))
    .catch((err) => console.log(err));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*" }));
app.use("/api/wilder", wilder_1.default);
app.listen(5002, () => {
    console.log("app listening on port 5002");
});
