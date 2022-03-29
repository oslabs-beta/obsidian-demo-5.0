import { Pool } from 'https://deno.land/x/postgres/mod.ts';
// import { PoolClient } from 'https://deno.land/x/postgres/client.ts';

import { sqlTableCreate } from './db-init.js';
import { plantsData } from './test-data/plants.js';
import { countriesData } from './test-data/countries.js';
import { plantsAndCountriesData } from './test-data/plants_countries.js';
import 'https://deno.land/x/dotenv/load.ts';

// config db connection
let pgPort: number | string | undefined = Deno.env.get('PG_PORT');
if (typeof pgPort === 'string') {
  pgPort = parseInt(pgPort as string);
}

const config = {
  user: Deno.env.get('PG_USER'),
  database: Deno.env.get('PG_DATABASE'),
  password: Deno.env.get('PG_PASSWORD'),
  hostname: Deno.env.get('PG_HOSTNAME'),
  port: pgPort,
};
 
// parallel connections so we can have concurrent access (maybe not needed)
const POOL_CONNECTIONS = 10; // breaks at 10+ due to ElephantSQL

// connect to db
const pool = new Pool(config, POOL_CONNECTIONS);

export async function createDb() {
  // drops the schema
  try {
    const client = await pool.connect();
    await client.queryObject({
      text: `DROP SCHEMA IF EXISTS obsidian_demo_schema CASCADE;`,
      args: [],
    });
    client.release();
  } catch (err) {
    console.log(err);
  }

  // create db
  try {
    const client = await pool.connect();
    await client.queryObject({
      text: sqlTableCreate,
      args: [],
    });
    client.release();
  } catch (err) {
    console.log(err);
  }

  // Seeds the DB
  try {
    const client = await pool.connect();
    await client.queryObject({
      text: plantsData,
      args: [],
    });
    client.release();
  } catch (err) {
    console.log(err);
  }

  try {
    const client = await pool.connect();
    await client.queryObject({
      text: countriesData,
      args: [],
    });
    client.release();
  } catch (err) {
    console.log(err);
  }

  try {
    const client = await pool.connect();
    await client.queryObject({
      text: plantsAndCountriesData,
      args: [],
    });
    client.release();
  } catch (err) {
    console.log(err);
  }
  pool.end();
}