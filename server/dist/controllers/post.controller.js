"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postBlogData = void 0;
const post_services_1 = require("../services/post.services");
const postBlogData = (req, res) => {
    try {
        const { title, message, date } = req.body;
        console.log(title, message);
        (0, post_services_1.postBlogServices)(title, message, date);
        res.send({ message: "OK" });
    }
    catch (e) {
        res.status(500).send({ message: 'Internal server error' });
    }
};
exports.postBlogData = postBlogData;
