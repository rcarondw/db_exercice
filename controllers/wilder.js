import WilderModel from "../models/wilder.js";
import { listErrors } from "../utilities/tools.js";

export default {
  create: async (req, res, next) => {
    console.log("test");
    const { name, city, description, skills } = req.body;

    await WilderModel.init().then(() => {
      const wilder = new WilderModel({
        name,
        city,
        description,
        skills,
      });
      wilder
        .save()
        .then((result) => {
          console.log(res);
          return res.status(200).json({ success: true, result });
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).json({
            success: false,
            result: listErrors(err),
          });
        });
    });
  },

  getAll: async (req, res) => {
    await WilderModel.find()
      .then((result) => {
        res.status(200).json({
          success: true,
          result,
        });
      })
      .catch((err) => {
        res.status(400).json({
          success: false,
          result: listErrors(err),
        });
      });
  },

  getOne: async (req, res) => {
    const { _id } = req.params;
    await WilderModel.findOne({ _id })
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
          result: listErrors(err),
        });
      });
  },

  update: async (req, res) => {
    const { name, city, description, skills } = req.body;
    const { _id } = req.params;
    await WilderModel.updateOne(
      { _id },
      {
        name: name,
        city: city,
        description,
        skills: skills,
      }
    )
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
          result: listErrors(err),
        });
      });
  },

  delete: async (req, res, next) => {
    const { _id } = req.params;
    await WilderModel.deleteOne({ _id })
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
          result: listErrors(err),
        });
      });
  },
};
