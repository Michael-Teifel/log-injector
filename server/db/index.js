const { Pool } = require('pg');

const connectionString = process.env.DATABASE_CONNECTION_STRING

const pool = new Pool({
  connectionString
});

module.exports = {
    query: (text, params, callback) => {
        executedAt = Date.now();
        console.log('executed query - ', {executedAt, text });
        return pool.query(text, params, callback);
    }
}
