import pool from '../config';

const commentsTable = `DROP TABLE IF EXISTS comments CASCADE;
        CREATE TABLE comments (
            id SERIAL PRIMARY KEY NOT NULL,
            text TEXT UNIQUE NOT NULL,
            ip_address CHARACTER VARYING(255) NOT NULL,
            episode_id CHARACTER VARYING(255) NOT NULL,
            created_on TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        )`;

/**
    * Function representing commentableHandler
    * @returns {object} representing success or failure
*/
export async function createCommentTable() {
  try {
    const create = await pool.query(commentsTable);
    console.error(`commentTable: ${create[0].command}PED and ${create[1].command}D`);
  } catch (error) {
    console.error(`commentTable ${error}`);
  }
}