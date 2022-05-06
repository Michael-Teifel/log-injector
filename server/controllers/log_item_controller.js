const db = require('../db/index.js');

const logItemController = {}

logItemController.create = function(req, res, next) {
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
      next()
    }
  })
}


logItemController.read = function(req, res, next) {
  const queryText = `SELECT * FROM log_items`
  const params = [];

  db.query(queryText, params, (err, queryResult) => {
    if(err) {
      next({log: 'Error in logItemController.read: ' + err.message})
    } else {
      res.locals.logItems = queryResult.rows
      next()
    }
  })
}

logItemController.delete = function(req, res, next) {
  const queryText = `DELETE FROM log_items WHERE _id=$1`
  const params = [req.params.id];

  db.query(queryText, params, (err, queryResult) => {
    if(err) {
      next({log: 'Error in logItemController.read: ' + err.message})
    } else {
      res.locals.deletedItem = queryResult.rows
      next()
    }
  })
}


module.exports = logItemController;