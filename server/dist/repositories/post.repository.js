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
exports.postRepo = void 0;
const database_1 = require("../database");
const postRepo = (title, message, date) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = new database_1.BlogList({
            title: title,
            message: message,
            date: date,
        });
        let savedData = yield value.save();
        return savedData;
    }
    catch (err) {
        console.log(err);
        return err;
    }
    //return new Promise((resolve, reject) => {
    // pool.query('Insert into blogdata values($1,$2,$3)',[title,message,date],
    //     (error:Error, results:any) => {
    //         if (error) {
    //             console.log('inside error')
    //             reject(error);
    //             return;
    //         }
    //         console.log(results)
    //         resolve(results.rows);
    //     });
    // });
});
exports.postRepo = postRepo;
