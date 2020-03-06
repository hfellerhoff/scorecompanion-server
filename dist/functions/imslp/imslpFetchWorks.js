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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imslpParseQuery_1 = __importDefault(require("./imslpParseQuery"));
const Database_1 = __importDefault(require("../../Database"));
exports.imslpFetchWorks = (title, composer) => __awaiter(void 0, void 0, void 0, function* () {
    const database = new Database_1.default();
    const { pool } = database;
    const result = yield pool
        .query(`SELECT * FROM works WHERE title ILIKE '%${title}%' AND composer ILIKE '%${composer}%';`)
        .then(results => {
        return results.rows;
    }, err => console.error(err));
    if (result)
        return imslpParseQuery_1.default(result);
    return [];
});
//# sourceMappingURL=imslpFetchWorks.js.map