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
const imslpFetchScoresFromWork = (work) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield node_fetch_1.default(work.link);
    const text = yield response.text();
    const root = fast_html_parser_1.default.parse(text);
    const fileContainers = root.querySelectorAll('div.we_file_download');
    const scores = [];
    fileContainers.forEach(container => {
        const linkContainer = container.querySelector('a.external');
        const href = linkContainer.attributes.href;
        const unparsedTitle = linkContainer.querySelector('span').childNodes[1]
            .rawText;
        const unparsedTitleArray = unparsedTitle.split('');
        let title = '';
        for (let i = 0; i < unparsedTitleArray.length; i += 1) {
            const char = unparsedTitleArray[i];
            if (char === '&') {
                if (unparsedTitle.substring(i, i + 6) === '&#160;') {
                    i += 5;
                    title += ' ';
                }
                else if (unparsedTitle.substring(i, i + 5) === '&amp;') {
                    i += 4;
                    title += '&';
                }
            }
            else {
                title += char;
            }
        }
        const infoContainer = container.querySelector('span.we_file_info2');
        const unparsedSize = infoContainer.childNodes[2].text;
        const size = unparsedSize.substring(3, unparsedSize.length - 1);
        const ratingContainer = infoContainer.querySelector('span.current-rating');
        console.log(ratingContainer);
        scores.push({
            title,
            href,
            size,
        });
    });
    return Object.assign(Object.assign({}, work), { scores });
});
exports.default = imslpFetchScoresFromWork;
//# sourceMappingURL=imslpFetchScoresFromWork.js.map