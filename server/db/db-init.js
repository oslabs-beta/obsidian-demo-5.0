// /* eslint-disable */
// export const sqlTableCreate = `
//   CREATE SCHEMA obsidian_demo_schema
//   CREATE TABLE actors (
//     id SERIAL PRIMARY KEY,
//     first_name VARCHAR(255) NOT NULL,
//     last_name VARCHAR(255) NOT NULL,
//     nickname VARCHAR(255)
//     )
//   CREATE TABLE films (
//     id SERIAL NOT NULL PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     genre VARCHAR(255) NOT NULL,
//     release_dt INTEGER NOT NULL
//     )
//   CREATE TABLE actor_films (
//     id SERIAL NOT NULL PRIMARY KEY,
//     actor_id INTEGER NOT NULL,
//     film_id INTEGER NOT NULL,
//     FOREIGN KEY (film_id)
//       REFERENCES films (id)
//       ON DELETE CASCADE,
//     FOREIGN KEY (actor_id)
//       REFERENCES actors (id)
//       ON DELETE CASCADE
//     )
// `;

/* eslint-disable */
export const sqlTableCreate = `
  CREATE SCHEMA obsidian_demo_schema;
  CREATE TABLE obsidian_demo_schema.plants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    maintenance VARCHAR(50) NOT NULL,
    size VARCHAR(50) NOT NULL,
		imageUrl TEXT NOT NULL
    );
  CREATE TABLE obsidian_demo_schema.countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    climate VARCHAR(50)
    );
	CREATE TABLE obsidian_demo_schema.plants_countries (
		id SERIAL NOT NULL PRIMARY KEY,
		plant_id INTEGER NOT NULL,
		country_id INTEGER NOT NULL,
		FOREIGN KEY (plant_id) REFERENCES obsidian_demo_schema.plants(id)
			ON DELETE CASCADE,
		FOREIGN KEY (country_id) REFERENCES obsidian_demo_schema.countries(id)
			ON DELETE CASCADE
	);
`;
