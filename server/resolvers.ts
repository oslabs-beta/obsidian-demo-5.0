import { Pool } from 'https://deno.land/x/postgres/mod.ts';
import "https://deno.land/x/dotenv/load.ts";

// import { PoolClient } from 'https://deno.land/x/postgres/client.ts';

let pgPort: number | string | undefined = Deno.env.get('PG_PORT');
if (typeof pgPort === 'string') {
  pgPort = parseInt(pgPort as string);
}

//get Anthony's login info
const config = {
  user: Deno.env.get('PG_USER'),
  database: Deno.env.get('PG_DATABASE'),
  password: Deno.env.get('PG_PASSWORD'),
  hostname: Deno.env.get('PG_HOSTNAME'),
  port: pgPort,
};

const POOL_CONNECTIONS = 3; // breaks at 10+ due to ElephantSQL

let pool = new Pool(config, POOL_CONNECTIONS);

const resolvers = {
  Query: {
    allPlants: async (_a: string, { input }: { input: { maintenance?: string; size?: string }}) => {
        try{
            const client = await pool.connect();
            let rows;
            if (input && input.maintenance) {
              rows = await client.queryObject<{id: number, country_id: number, name: string, maintenance: string, size: string, imgUrl: string}>("SELECT * FROM Plants WHERE maintenance = $1", input.maintenance)
            } else if (input && input.size){
              rows = await client.queryObject<{id: number, country_id: number, name: string, maintenance: string, size: string, imgUrl: string}>("SELECT * FROM Plants WHERE size = $1", input.size)
            } else {
              rows = await client.queryObject<{id: number, country_id: number, name: string, maintenance: string, size: string, imgUrl: string}>("SELECT * FROM Plants")
            }
            return rows;
        }
        catch (err){
          console.log(err);
          console.log('resetting connection');
          pool.end();
          pool = new Pool(config, POOL_CONNECTIONS)
        }
    },
    countries: async (a: string, { input }: { input: { climate?: string }}) => {
      try {
        const client = await pool.connect();
        let rows;
        if (input && input.climate) {
          rows = await client.queryObject<{id: number, name: string, climate: string}>("SELECT * FROM Countries WHERE climate = $1", input.climate)
        }
          else {
            rows = await client.queryObject<{id: number, name: string, climate: string}>("SELECT * FROM Countries")
          }
      }
      catch(err) {
        console.log(err);
        console.log('resetting connection')
        pool.end();
        pool = new Pool(config, POOL_CONNECTIONS)
      }
    }
  },
  Mutation: {
    addPlant: async(_a: string, { input }: { input: {name: string, maintenance:string, size:string, imgUrl: string}}) => {
      try{
        const client = await pool.connect();
        const rows = await client.queryObjectt<{id: number, country_id: number, name: string, maintenance: string, size: number, imgUrl: string}>("INSERT INTO Plants (name, maintenance, size, imgUrl) VALUES ($1, $2, $3, $4) RETURNING *", input.name, input.maintenance, input.size, input.imgUrl)
        client.release();

        return rows[0]
      }
      catch (err) {
        console.log(err);
        console.log('resetting connection');
        pool.end();
        pool = new Pool(config, POOL_CONNECTIONS);
      }
    },
    
    addCountry: async (_a: string, { input}: { input: { climate: string}}) => {
      try {
        const client = await pool.connect();
        const rows = await client.queryObject<{id: number, name: string, climate: string}>("INSERT INTO Countries (name, climate) VALUES ($1, $2) RETURNING *", input.name, input.climate)
        client.release();
        return rows[0];
      }
      catch (err) {
        console.log(err);
        console.log('resetting connection');
        pool.end();
        pool = new Pool(config, POOL_CONNECTIONS);
      }
    }
  }
}

export default resolvers;
