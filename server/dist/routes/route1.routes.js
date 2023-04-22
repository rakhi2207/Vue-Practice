"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const post_controller_1 = require("../controllers/post.controller");
const get_controller_1 = require("../controllers/get.controller");
const app = require('express');
exports.router = app.Router();
exports.router.post("/blog", post_controller_1.postBlogData);
exports.router.get("/blog", get_controller_1.getBlogData);
