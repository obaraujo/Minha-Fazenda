const sqlite = require('sqlite-async');

function execute(db) {
  return db.exec(`
  CREATE TABLE "producers" (
    "id"	INTEGER UNIQUE,
    "name"	TEXT NOT NULL,
    "dateOfBirth"	TEXT NOT NULL,
    "sex"	TEXT NOT NULL,
    "password"	TEXT NOT NULL,
    "image"	TEXT,
    "idAnimals"	INTEGER,
    PRIMARY KEY("id" AUTOINCREMENT)
  );
  `)
} 

module.exports = sqlite.open(__dirname + '/database.sqlite')
  .then(execute)