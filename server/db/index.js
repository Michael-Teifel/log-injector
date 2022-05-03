const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
    query: (text, params, callback) => {
        executedAt = Date.now();
        console.log('executed query - ', {executedAt, text });
        return pool.query(text, params, callback);
    }
}
