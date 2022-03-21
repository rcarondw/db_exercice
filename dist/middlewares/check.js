"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const express_validator_1 = require("express-validator");
exports.create = [
    (0, express_validator_1.body)("name")
        .isLength({ min: 4 })
        .withMessage("Le nom doit avoir au moins 4 caratères"),
    (0, express_validator_1.body)("city")
        .isLength({ min: 2 })
        .withMessage("La ville doit avoir au moins 2 caractères"),
    (req, res, next) => {
        const errorsValidation = (0, express_validator_1.validationResult)(req);
        if (!errorsValidation.isEmpty()) {
            let errors = {};
            errorsValidation.errors.map((err) => {
                errors = { ...errors, [err.param]: err.msg };
            });
            res.status(400).json({
                success: false,
                result: errors,
            });
        }
        else
            next();
    },
];
