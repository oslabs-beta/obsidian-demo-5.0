/* eslint-disable */
export const sqlTableCreate = `
  CREATE SCHEMA obsidian_demo_schema;
  CREATE TABLE obsidian_demo_schema.plants (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    maintenance VARCHAR(50) NOT NULL,
    size VARCHAR(50) NOT NULL,
		imageUrl VARCHAR(255) NOT NULL
    );
  CREATE TABLE countries (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    climate VARCHAR(50) NOT NULL
    );
  CREATE TABLE plants_countries (
    id SERIAL NOT NULL PRIMARY KEY,
    plant_id INTEGER NOT NULL,
    country_id INTEGER NOT NULL,
    FOREIGN KEY (plant_id)
      REFERENCES plants (id)
      ON DELETE CASCADE,
    FOREIGN KEY (country_id)
      REFERENCES countries (id)
      ON DELETE CASCADE
    );
`;
