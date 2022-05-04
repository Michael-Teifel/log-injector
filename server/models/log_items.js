const db = require('../db/index.js');

module.exports = {
  new: (name, value) => {
    queryText = `
      INSERT INTO 
        log_items (name, object)
        VALUES    ($1, $2)
    `
    params = [name, JSON.stringify(value)];

    db.query(queryText, params, (err, res) => {
      if(err) {
        return err;
      } else {
        return res;
      }
    })
  }
}