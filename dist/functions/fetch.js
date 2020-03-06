const fetch = () => {
    console.log(req.query);
    const { title, composer, start, limit } = req.query;
    const parsedStart = start ? start : 0;
    const parsedLimit = limit ? limit : 10;
    let data;
    if (title !== '' && composer !== '') {
        console.log('Fetching works by title and composer...');
        data = yield fetchWorksByTitleAndComposer(title, composer);
    }
    else if (title) {
        console.log('Fetching works by title...');
        data = yield fetchWorksByTitle(title);
    }
    else if (composer) {
        console.log('Fetching works by composer...');
        data = yield fetchWorksByComposer(composer);
    }
    data = data.slice(parsedStart, parsedLimit);
    data = yield fetchFilesFromWork(data);
};
//# sourceMappingURL=fetch.js.map