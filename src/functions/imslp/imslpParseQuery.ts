import { ReturnFormat, IMSLPResult } from '../../typescript/Interfaces';

const imslpParseQuery = (results: IMSLPResult[]) => {
  return results.map(result => {
    const parsedObject: ReturnFormat = {
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

export default imslpParseQuery;
