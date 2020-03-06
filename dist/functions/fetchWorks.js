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
const imslpFetchWorks_1 = require("./imslp/imslpFetchWorks");
const fetchScoresFromWork_1 = __importDefault(require("./fetchScoresFromWork"));
const fetchWorks = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, composer, start, limit } = query;
    const parsedStart = start ? start : 0;
    const parsedLimit = limit ? limit : 10;
    let data = [];
    // Fetch data from all relevant sources
    const [imslpData] = yield Promise.all([imslpFetchWorks_1.imslpFetchWorks(title, composer)]);
    // Add individual site data into main data array
    data.push(...imslpData);
    // Trim data down to requested size
    data = data.slice(parsedStart, parsedLimit);
    // Add necessary extra details
    data = yield fetchScoresFromWork_1.default(data);
    return data;
});
exports.default = fetchWorks;
// if (title !== '' && composer !== '') {
//   console.log('Fetching works by title and composer...');
//   data = await fetchWorksByTitleAndComposer(title, composer);
// } else if (title) {
//   console.log('Fetching works by title...');
//   data = await fetchWorksByTitle(title);
// } else if (composer) {
//   console.log('Fetching works by composer...');
//   data = await fetchWorksByComposer(composer);
// }
//# sourceMappingURL=fetchWorks.js.map