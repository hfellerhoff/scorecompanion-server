import express from 'express';
import cors from 'cors';
import fetchWorks from './functions/fetchWorks';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/search', async (req, res) => {
  const { query } = req;
  const data = await fetchWorks(query);

  res.json(data);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));
