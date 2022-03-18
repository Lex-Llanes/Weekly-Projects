const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "hyol33ung",
    host: "localhost",
    database: "eventonica",
    post: 5432,
})

module.exports = pool;