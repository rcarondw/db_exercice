import WilderModel from "../models/wilder.js";
import { listErrors } from "../utilities/tools.js";

export default {
  create: (req, res, next) => {
    const { name, city, skills } = req.body;

    WilderModel.init().then(() => {
      const wilder = new WilderModel({
        name,
        city,
        skills,
      });
      wilder
        .save()
        .then((result) => {
          res.json({ success: true, result });
        })
        .catch((err) => {
          res.status(400).json({
            success: false,
            result: listErrors(err),
          });
        });
    });
  },

  getAll: (req, res) => {
    WilderModel.find()
      .then((result) => {
        res.status(200).json({
          success: true,
          result,
        });
      })
      .catch((err) => {
        res.status(400).json({
          success: false,
          result: err,
        });
      });
  },

  getOne: (req, res) => {
    WilderModel.findById()
      .then((result) => {
        res.status(200).json({
          success: true,
          result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          success: false,
          err,
        });
      });
  },
};
