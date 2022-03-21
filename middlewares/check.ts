import { body, validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

export const create = [
  body("name")
    .isLength({ min: 4 })
    .withMessage("Le nom doit avoir au moins 4 caratères"),
  body("city")
    .isLength({ min: 2 })
    .withMessage("La ville doit avoir au moins 2 caractères"),
  (req: Request, res: Response, next: NextFunction) => {
    const errorsValidation: any = validationResult(req);
    if (!errorsValidation.isEmpty()) {
      let errors = {};

      errorsValidation.errors.map((err: any) => {
        errors = { ...errors, [err.param]: err.msg };
      });

      res.status(400).json({
        success: false,
        result: errors,
      });
    } else next();
  },
];
