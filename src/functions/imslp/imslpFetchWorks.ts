import { Pool } from 'pg';
import { IMSLPResult, ReturnFormat } from '../../typescript/Interfaces';
import imslpParseQuery from './imslpParseQuery';
import Database from '../../Database';

export const imslpFetchWorks = async (
  title: string,
  composer: string
): Promise<ReturnFormat[]> => {
  const database = new Database();
  const { pool } = database;

  const result = await pool
    .query(
      `SELECT * FROM works WHERE title ILIKE '%${title}%' AND composer ILIKE '%${composer}%';`
    )
    .then(
      results => {
        return results.rows as IMSLPResult[];
      },
      err => console.error(err)
    );
  if (result) return imslpParseQuery(result);
  return [];
};
