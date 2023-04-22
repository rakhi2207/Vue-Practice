"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postBlogServices = void 0;
const post_repository_1 = require("../repositories/post.repository");
const postBlogServices = (title, message, date) => {
    return (0, post_repository_1.postRepo)(title, message, date);
};
exports.postBlogServices = postBlogServices;
