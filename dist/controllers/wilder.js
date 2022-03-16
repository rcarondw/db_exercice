"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wilder_js_1 = __importDefault(require("../models/wilder.js"));
const tools_js_1 = require("../utilities/tools.js");
exports.default = {
    create: async (req, res) => {
        const { name, city, description, skills } = req.body;
        await wilder_js_1.default.init().then(() => {
            const wilder = new wilder_js_1.default({
                name,
                city,
                description,
                skills,
            });
            wilder
                .save()
                .then((res) => {
                res.status(200).json({ success: true, res });
            })
                .catch((err) => {
                res.status(400).json({
                    success: false,
                    result: (0, tools_js_1.listErrors)(err),
                });
            });
        });
    },
    getAll: async (req, res) => {
        await wilder_js_1.default.find()
            .then((result) => {
            res.status(200).json({
                success: true,
                result,
            });
        })
            .catch((err) => {
            res.status(400).json({
                success: false,
                result: (0, tools_js_1.listErrors)(err),
            });
        });
    },
    getOne: async (req, res) => {
        const { _id } = req.params;
        await wilder_js_1.default.findOne({ _id })
            .then((result) => {
            if (!result) {
                return res.json({
                    success: false,
                    result: "cet utilisateur n'existe pas",
                });
            }
            res.status(200).json({
                success: true,
                result,
            });
        })
            .catch((err) => {
            res.status(400).json({
                success: false,
                result: (0, tools_js_1.listErrors)(err),
            });
        });
    },
    update: async (req, res) => {
        const { name, city, description, skills } = req.body;
        const { _id } = req.params;
        await wilder_js_1.default.updateOne({ _id }, {
            name: name,
            city: city,
            description,
            skills: skills,
        })
            .then((result) => {
            if (result.matchedCount === 0) {
                return res.json({
                    success: false,
                    result: "Cet identifiant n'existe pas",
                });
            }
            res.status(200).json({
                success: true,
                result,
            });
        })
            .catch((err) => {
            console.log(err);
            res.status(400).json({
                success: false,
                result: (0, tools_js_1.listErrors)(err),
            });
        });
    },
    delete: async (req, res) => {
        const { _id } = req.params;
        await wilder_js_1.default.deleteOne({ _id })
            .then((result) => {
            if (result.deletedCount === 0) {
                return res.json({
                    success: false,
                    result: "Cet identifiant n'existe pas",
                });
            }
            res.status(200).json({
                success: true,
                result,
            });
        })
            .catch((err) => {
            console.log(err);
            res.status(400).json({
                success: false,
                result: (0, tools_js_1.listErrors)(err),
            });
        });
    },
};
