require('dotenv').config();
const db = require('../index.js');

const queryText = `
  DROP TABLE IF EXISTS log_items;
  CREATE TABLE log_items (
    _id SERIAL,
    name text NOT NULL,
    value jsonb NOT NULL, 
    _created_at timestamptz DEFAULT current_timestamp
  );
`;
const queryParams = [];



db.query(queryText, queryParams, (err, res) => {
  if (err) {
    return err
  } else {
    return res
  }
})