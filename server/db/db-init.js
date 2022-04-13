/* eslint-disable */
// TEXT field for imageUrl has pretty much unlimited length; better than varchar in this case
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
