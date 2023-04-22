"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogData = void 0;
const get_services_1 = require("../services/get.services");
const getBlogData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = yield (0, get_services_1.getBlogServices)();
        res.status(200).json(value);
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ message: 'Internal server error' });
    }
});
exports.getBlogData = getBlogData;
