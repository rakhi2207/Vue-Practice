"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogServices = void 0;
const get_repository_1 = require("../repositories/get.repository");
const getBlogServices = () => {
    const tasks = (0, get_repository_1.getRepo)();
    return tasks;
};
exports.getBlogServices = getBlogServices;
