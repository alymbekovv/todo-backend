"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crud_routes_1 = __importDefault(require("../modules/crud/crud.routes"));
const router = (0, express_1.Router)();
router.use(`/crud`, crud_routes_1.default);
exports.default = router;
// http://localhost:5000/api/v1/crud/get-all
// http://localhost:5000/api/v1/crud/create
// http://localhost:5000/api/v1/crud/:id
// http://localhost:5000/api/v1/crud/:id
