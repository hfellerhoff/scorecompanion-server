import { APIQuery, ReturnFormat } from '../typescript/Interfaces';
import { imslpFetchWorks } from './imslp/imslpFetchWorks';
import fetchScoresFromWork from './fetchScoresFromWork';

const fetchWorks = async (query: APIQuery) => {
  const { title, composer, start, limit } = query;
  const parsedStart = start ? start : 0;
  const parsedLimit = limit ? limit : 10;

  let data: ReturnFormat[] = [];

  // Fetch data from all relevant sources
  const [imslpData] = await Promise.all([imslpFetchWorks(title, composer)]);

  // Add individual site data into main data array
  data.push(...imslpData);

  // Trim data down to requested size
  data = data.slice(parsedStart, parsedLimit);

  // Add necessary extra details
  data = await fetchScoresFromWork(data);

  return data;
};

export default fetchWorks;

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
