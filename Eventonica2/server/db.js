const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "hyol33ung",
    host: "localhost",
    database: "eventonica",
    port: 5433,
})

module.exports = pool;