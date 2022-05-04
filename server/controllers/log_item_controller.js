const db = require('../db/index.js');

const logItemController = {
  create: function(req, res, next) {
    queryText = `
      INSERT INTO 
        log_items (name, value)
        VALUES    ($1, $2)
    `
    params = [req.body.name, JSON.stringify(req.body.value)];

    db.query(queryText, params, (err, res) => {
      if(err) {
        next({log: 'Error in logItemController.create: ' + err.message})
      } else {
        next();
      }
    })
  }
}

module.exports = logItemController;