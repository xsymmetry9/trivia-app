require("dotenv").config();

const {Pool} = require('pg');

module.exports = new Pool({
    user: process.env.PGHOST,        // PostgreSQL user
    host: process.env.PGDATABASE,           // Database host
    database: process.env.PGUSER,    // Database name
    password: process.env.PGPASSWORD,// PostgreSQL user password
    port: 5432,                  // PostgreSQL port (default is 5432)    
    ssl:{
        require: true,
    }
});