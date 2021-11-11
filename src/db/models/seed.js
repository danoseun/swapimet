import dotenv from 'dotenv';
import format from 'pg-format';
import pool from '../config';

dotenv.config();



const variables = [
  ['1', '192.0.2.255', 'I would see this movie again and again'],
  ['1', '192.1.4.256', 'sweet movie'],
  ['1', '142.0.2.255', 'omo, I will not lie this movie sweet'],
  ['3', '192.0.3.155', 'this movie should win the oscars'],
  ['4', '203.0.2.255', 'I will give this movie 8/10'],
  ['5', '219.2.0.225', 'shitty movie'],
  ['1', '0.42.42.42', 'You have to see this great movie'],
  ['3', '203.0.113.0 ', 'It talks about this and that'],
  ['1', '111.0.113.2 ', 'A story about southern africa'],
  ['1', '113.1.113.6', 'A great movie']
];

const sql = format('INSERT INTO comments (episode_id, ip_address, text) VALUES %L returning id', variables);

/**
    * Function representing commentSeeder
    * @returns {object} representing success or failure
*/
export async function seedComments(){
  try {
    const result = await pool.query(sql);
    console.log(`Comments ${result.command}ED`);
  } catch (error) {
    console.error(`seedComments ${error}`);
  }
}