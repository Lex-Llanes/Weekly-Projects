const pgp = require('pg-promise')(/* options */);
//const db = pgp('postgres://username:password@host:port/database')
const db = pgp('postgres://postgres:hyol33ung@localhost:5432/eventonica');

module.exports = db;