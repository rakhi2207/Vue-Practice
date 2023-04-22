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
exports.getRepo = void 0;
const database_1 = require("../database");
const getRepo = () => __awaiter(void 0, void 0, void 0, function* () {
    // return new Promise((resolve, reject) => {
    //     pool.query('Select * from blogdata',
    //         (error:Error, results:any) => {
    //             if (error) {
    //                 reject(error);
    //                 return;
    //             }
    //             // console.log(results)
    //              resolve(results.rows);
    //         });
    // });
    try {
        const result = yield database_1.BlogList.find();
        return result;
    }
    catch (err) {
        return err;
    }
});
exports.getRepo = getRepo;
