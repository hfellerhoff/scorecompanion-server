"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imslpParseQuery = (results) => {
    return results.map(result => {
        const parsedObject = {
            title: result.title,
            composer: result.composer,
            scores: [],
            price: 0.0,
            site: 'IMSLP',
            link: result.permlink,
        };
        return parsedObject;
    });
};
exports.default = imslpParseQuery;
//# sourceMappingURL=imslpParseQuery.js.map