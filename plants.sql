-- create tables
CREATE TABLE "PLANTS" (
	"id" SERIAL NOT NULL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"maintenance" VARCHAR(50) NOT NULL,
	"size" VARCHAR(50) NOT NULL,
	"imageUrl" VARCHAR(255) NOT NULL
);

CREATE TABLE "COUNTRIES" (
	"id" SERIAL NOT NULL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"climate" VARCHAR(50) NOT NULL
);

CREATE TABLE "PLANTS_COUNTRIES" (
	"id" SERIAL NOT NULL PRIMARY KEY,
	"plant_id" INTEGER NOT NULL,
	"country_id" INTEGER NOT NULL,
	FOREIGN KEY ("plant_id")
		REFERENCES "PLANTS" ("id")
		ON DELETE CASCADE,
	FOREIGN KEY ("country_id")
		REFERENCES "COUNTRIES" ("id")
		ON DELETE CASCADE
);

-- seed db
INSERT INTO "PLANTS" ('id', 'name', "maintenance", "size", "imageUrl") VALUES (1, 'Monstera', 'Low', 'Large', 'https://www.google.com');