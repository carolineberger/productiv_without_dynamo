'use strict';
module.exports = function(app) {
    var productiv = require('../controllers/productivController');
  
    app.route('/productiv')
      .get(productiv.list_all_activities)
      .post(productiv.create_an_activity);
  
  
    app.route('/productiv/:productivId')
      .get(productiv.read_an_activity)
      .put(productiv.update_an_activity)
      .delete(productiv.delete_an_activity);
  };