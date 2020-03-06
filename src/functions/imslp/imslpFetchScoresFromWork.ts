import fetch from 'node-fetch';
import HTMLParser from 'fast-html-parser';
import { ReturnFormat, ScoreFormat } from '../../typescript/Interfaces';

const imslpFetchScoresFromWork = async (
  work: ReturnFormat
): Promise<ReturnFormat> => {
  const response = await fetch(work.link);
  const text = await response.text();
  const root = HTMLParser.parse(text);
  const fileContainers = root.querySelectorAll('div.we_file_download');

  const scores: ScoreFormat[] = [];
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
        } else if (unparsedTitle.substring(i, i + 5) === '&amp;') {
          i += 4;
          title += '&';
        }
      } else {
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

  return {
    ...work,
    scores,
  };
};

export default imslpFetchScoresFromWork;
