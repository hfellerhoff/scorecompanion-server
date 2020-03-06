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
const imslpFetchScoresFromWork_1 = __importDefault(require("./imslp/imslpFetchScoresFromWork"));
const fetchScoresFromWork = (works) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedWorks = [];
    for (const work of works) {
        const { site } = work;
        let parsedWork;
        if (site === 'IMSLP')
            parsedWork = yield imslpFetchScoresFromWork_1.default(work);
        else
            parsedWork = work;
        parsedWorks.push(parsedWork);
    }
    return parsedWorks;
});
exports.default = fetchScoresFromWork;
//# sourceMappingURL=fetchScoresFromWork.js.map