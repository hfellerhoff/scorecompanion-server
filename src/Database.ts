import { Pool } from 'pg';

class Database {
  pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'imslp',
      password: '',
      port: 5432,
    });

    this.pool.connect();
  }
}

export default Database;

// export const fetchWorksByTitle = async (title: string) => {
//   const result = await pool
//     .query(`SELECT * FROM works WHERE title ILIKE '%${title}%' ORDER BY title;`)
//     .then(
//       results => {
//         return results.rows as IMSLPResult[];
//       },
//       err => console.error(err)
//     );
//   if (result) return imslpParseQuery(result);
//   return [];
// };

// export const fetchWorksByComposer = async (composer: string) => {
//   const result = await pool
//     .query(`SELECT * FROM works WHERE composer ILIKE '%${composer}%';`)
//     .then(
//       results => {
//         return results.rows as IMSLPResult[];
//       },
//       err => console.error(err)
//     );
//   if (result) return imslpParseQuery(result);
//   return [];
// };

// export const fetchWorksByTitleAndComposer = async (
//   title: string,
//   composer: string
// ) => {
//   const result = await pool
//     .query(
//       `SELECT * FROM works WHERE title ILIKE '%${title}%' AND composer ILIKE '%${composer}%';`
//     )
//     .then(
//       results => {
//         return results.rows as IMSLPResult[];
//       },
//       err => console.error(err)
//     );
//   if (result) return imslpParseQuery(result);
//   return [];
// };
