"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogList = void 0;
// const Pool = require('pg').Pool
const mongoose_1 = __importDefault(require("mongoose"));
// export const pool = new Pool({
//     user:"postgres",
//     host:"localhost",
//     database:"blog",
//     password:"Aditi",
//     port:5432
// })
mongoose_1.default.connect('mongodb://127.0.0.1:27017/blog')
    .then(() => { console.log('connection Successful'); })
    .catch((err) => { console.log(err); });
const blogSchema = new mongoose_1.default.Schema({
    title: String,
    message: String,
    date: String
});
exports.BlogList = mongoose_1.default.model('BlogList', blogSchema);
