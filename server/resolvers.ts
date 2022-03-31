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
	host_type: "tcp",
  port: pgPort,
};

const POOL_CONNECTIONS = 3; // breaks at 10+ due to ElephantSQL

let pool = new Pool(config, POOL_CONNECTIONS);

const resolvers = {
  Query: {
    plants: async (_a: string, { input }: { input: { maintenance?: string; size?: string }}) => {
        try{
            const client = await pool.connect();
            let rows;
            if (input && input.maintenance) {
              rows = await client.queryObject<{
                id: number;
                name: string;
                maintenance: string;
                size: string;
                imageurl: string;
              }>({
								text: 'SELECT * FROM obsidian_demo_schema.plants WHERE maintenance = $1',
                args: [input.maintenance],
							}
              );
            } else if (input && input.size){
              rows = await client.queryObject<{
                id: number;
                name: string;
                maintenance: string;
                size: string;
                imageurl: string;
              }>({
									text: 'SELECT * FROM obsidian_demo_schema.plants WHERE size = $1',
                args: [input.size],
							}
              );
            } else {
              rows = await client.queryObject<{
                id: number;
                name: string;
                maintenance: string;
                size: string;
                imageurl: string;
              }>('SELECT * FROM obsidian_demo_schema.plants');
            }
            console.log('(In resolver getting plants');
            console.log(rows.rows);
						await client.release()
            return rows.rows;
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
          rows = await client.queryObject<{
            id: number;
            name: string;
            climate: string;
          }>(
            'SELECT * FROM obsidian_demo_schema.countries WHERE climate = $1',
            input.climate
          );
        }
          else {
            rows = await client.queryObject<{
              id: number;
              name: string;
              climate: string;
            }>('SELECT * FROM obsidian_demo_schema.countries');
          }
					return rows.rows;
      }
      catch(err) {
        console.log(err);
        console.log('resetting connection')
        pool.end();
        pool = new Pool(config, POOL_CONNECTIONS)
      }
    }
  },
  // Plant: {
  //   country: async (_a: string, { id }: { id: string | number}) => {
  //     try{
  //       const client = await pool.connect()
  //       const rows = await client.queryObject<{id: number, name:string, climate: string}>({
  //         text: `SELECT c.* 
  //         FROM obsidian_demo_schema.countries AS c
  //         INNER JOIN obsidian_demo_schema.plants_countries AS pc
  //         ON c.id = pc.plant_id
  //         INNER JOIN obsidian_demo_schema.plants as p
  //         ON p.id = pc.country_id
  //         WHERE c.id = $1`,
  //         args: [id]
  //       })
  //       client.release()
  //       return rows.rows;
  //     }catch (err) {
  //       console.log(err);
  //       console.log('resetting connection');
  //       pool.end();
  //       pool = new Pool(config, POOL_CONNECTIONS);
  //     }
  //   }
  // },
  // Country: {
  //   plant: async (_a: string, { input }: { input: string | number }) => {
  //     try {
  //       const client = await pool.connect();
  //       const rows = await client.queryObject<{id: number, name: string, maintenance: string, size: string, imageurl: string }>(
  //         `SELECT p.*
  //         FROM obsidian_demo_schema.plants AS p
  //         INNER JOIN obsidian_demo_schema.plants_countries AS pc
  //         ON p.id = pc.plant_id
  //         INNER JOIN obsidian_demo_schema.countries AS c
  //         ON c.id = pc.country_id
  //         WHERE c.id = $1`
  //       )
  //       client.release();
  //       return rows.rows;
  //     }
  //     catch (err) {
  //       console.log(err);
  //       console.log('resetting connection');
  //       pool.end();
  //       pool = new Pool(config, POOL_CONNECTIONS);
  //     }
  //   }
  // },
  Mutation: {
    addPlant: async(_a: string, { input }: { input: {name: string, maintenance:string, size:string, imageurl: string}}) => {
      try{
        console.log('In the resolver: ', input.name, input.maintenance, input.size, input.imageurl)
        const client = await pool.connect();
        const rows = await client.queryObject<{
          id: number;
          name: string;
          maintenance: string;
          size: string;
          imageurl: string;
        }>({

          text: 'INSERT INTO obsidian_demo_schema.plants (name, maintenance, size, imageurl) VALUES ($1, $2, $3, $4) RETURNING *',
          args: [input.name,
            input.maintenance,
            input.size,
            input.imageurl],
        }
        );
        await client.release();
        return rows.rows[0]
      }
      catch (err) {
        console.log(err);
        console.log('resetting connection');
        pool.end();
        pool = new Pool(config, POOL_CONNECTIONS);
      }
    },

    deletePlant: async(_a: string, { id }: { id: string}) => {
      try {
        const client = await pool.connect();

        const {rows} = await client.queryObject<{
          id: number;
          name: string;
          maintenance: string;
          size: string;
          imageurl: string;
        }>({
          text: `
            DELETE FROM obsidian_demo_schema.plants
            WHERE id = $1
            RETURNING *;
          `,
          args: [id],
        });

        await client.release();

        const deletedPlant = rows[0];

        return deletedPlant;
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
        const rows = await client.queryObject<{
          id: number;
          name: string;
          climate: string;
        }>(
          'INSERT INTO obsidian_demo_schema.countries (name, climate) VALUES ($1, $2) RETURNING *',
          input.name,
          input.climate
        );
        client.release();
        return rows.rows[0];
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
