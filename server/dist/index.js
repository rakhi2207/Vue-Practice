"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const route1_routes_1 = require("./routes/route1.routes");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express = require('express');
const app = express();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use("/", route1_routes_1.router);
app.listen("8080", () => {
    console.log("server is running");
});
