import { body, validationResult } from "express-validator";

export const create = [
  body("name")
    .isLength({ min: 4 })
    .withMessage("Le nom doit avoir au moins 4 caratères"),
  body("city")
    .isLength({ min: 2 })
    .withMessage("La ville doit avoir au moins 2 caractères"),
  (req, res, next) => {
    const errorsValidation = validationResult(req);
    if (!errorsValidation.isEmpty()) {
      let errors = {};

      errorsValidation.errors.map((err) => {
        errors = { ...errors, [err.param]: err.msg };
      });

      res.json({
        success: false,
        result: errors,
      });
    } else next();
  },
];
