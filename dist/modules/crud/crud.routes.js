"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crud_controllers_1 = __importDefault(require("./crud.controllers"));
const router = (0, express_1.Router)();
const corsConfig = {
    origin: ["http://localhost:3000"],
};
router.get(`/get-all`, crud_controllers_1.default.getAllProducts);
router.post(`/create`, crud_controllers_1.default.createProduct);
router.put(`/:id`, crud_controllers_1.default.updateProduct);
router.delete(`/:id`, crud_controllers_1.default.deleteProduct);
router.get(`/:id`, crud_controllers_1.default.getOneProductById);
exports.default = router;
