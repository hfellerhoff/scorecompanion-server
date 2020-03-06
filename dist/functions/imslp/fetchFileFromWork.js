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
const node_fetch_1 = __importDefault(require("node-fetch"));
const fast_html_parser_1 = __importDefault(require("fast-html-parser"));
const fetchScoresFromWork = (works) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedWorks = [];
    for (const work of works) {
        console.log(work.link);
        const response = yield node_fetch_1.default(work.link);
        const text = yield response.text();
        const root = fast_html_parser_1.default.parse(text);
        const fileContainers = root.querySelectorAll('div.we_file_download');
        const scores = [];
        fileContainers.forEach(container => {
            const linkContainer = container.querySelector('a.external');
            const href = linkContainer.attributes.href;
            const title = linkContainer.querySelector('span').childNodes[1].rawText;
            scores.push({
                title,
                href,
            });
        });
        parsedWorks.push(Object.assign(Object.assign({}, work), { scores }));
    }
    console.log(parsedWorks);
    return parsedWorks;
});
exports.default = fetchScoresFromWork;
//# sourceMappingURL=fetchFileFromWork.js.map