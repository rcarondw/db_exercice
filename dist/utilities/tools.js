"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listErrors = void 0;
const listErrors = (err) => {
    let errors = {};
    err.errors &&
        Object.keys(err.errors).map((key) => {
            errors = { ...errors, [key]: err.errors[key].message };
        });
    err.code === 11000 &&
        Object.keys(err.keyPattern).map((key) => {
            errors = { ...errors, [key]: `${key} existe déjà` };
        });
    if (err.kind && err.kind === "ObjectId") {
        errors = {
            ...errors,
            objectid: "Cet identifiant n'est pas un ObjectId valide",
        };
    }
    return errors;
};
exports.listErrors = listErrors;
