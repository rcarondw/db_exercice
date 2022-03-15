"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const WilderSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "le nom est requis !"],
    },
    city: {
        type: String,
        required: [true, "La ville est requise !"],
    },
    skills: [
        {
            title: String,
            votes: Number,
        },
    ],
}, {
    versionKey: false,
});
exports.default = mongoose_1.default.model("wilder", WilderSchema);
