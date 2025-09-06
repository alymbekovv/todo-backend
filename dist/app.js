"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const buildServer = () => {
    const server = (0, express_1.default)();
    server.use(express_1.default.json());
    server.use((0, cors_1.default)({
        origin: ["http://localhost:3001"],
    }));
    server.get("/", (req, res) => {
        res.status(200).json({
            message: "Hello Express",
        });
    });
    server.use(`/api/v1`, routes_1.default);
    return server;
};
exports.default = buildServer;
