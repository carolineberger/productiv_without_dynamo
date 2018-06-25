'use strict';
module.exports = function(app) {
    var controller = require('../controllers/activityController');
  
    app.route('/activity')
      .get(controller.list_all_activities)
      .post(controller.create_an_activity);
  
  
    app.route('/activity/:activityId')
      .get(controller.read_an_activity)
      .put(controller.update_an_activity)
      .delete(controller.delete_an_activity);
  };