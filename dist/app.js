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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fetchWorks_1 = __importDefault(require("./functions/fetchWorks"));
const app = express_1.default();
const PORT = process.env.PORT || 3000;
app.use(cors_1.default());
app.get('/api/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = req;
    const data = yield fetchWorks_1.default(query);
    res.json(data);
}));
app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));
//# sourceMappingURL=app.js.map