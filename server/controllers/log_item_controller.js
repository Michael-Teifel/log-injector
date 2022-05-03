const logItemController = {
  createLogItem: function(req, res, next) {
      console.log('logItemController Called');
      next();
  }
}

module.exports = logItemController;