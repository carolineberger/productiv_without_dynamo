'use strict';
module.exports = function(app) {
    var productiv = require('../controllers/productivController');
  
    app.route('/activity')
      .get(productiv.list_all_activities)
      .post(productiv.create_an_activity);
  
  
    app.route('/activity/:activityId')
      .get(productiv.read_an_activity)
      .put(productiv.update_an_activity)
      .delete(productiv.delete_an_activity);
  };