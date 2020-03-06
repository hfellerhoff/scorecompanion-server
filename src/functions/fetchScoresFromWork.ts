import { ReturnFormat } from '../typescript/Interfaces';
import imslpFetchScoresFromWork from './imslp/imslpFetchScoresFromWork';

const fetchScoresFromWork = async (works: ReturnFormat[]) => {
  const parsedWorks = [];
  for (const work of works) {
    const { site } = work;

    let parsedWork;
    if (site === 'IMSLP') parsedWork = await imslpFetchScoresFromWork(work);
    else parsedWork = work;
    parsedWorks.push(parsedWork);
  }

  return parsedWorks;
};

export default fetchScoresFromWork;
