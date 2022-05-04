require('dotenv').config();
const db = require('../index.js');

const queryText = `
  CREATE TABLE log_items (
    _id SERIAL
  )
`;
const queryParams = [];



db.query(queryText, queryParams, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})