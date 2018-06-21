'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// path = http://localhost:3000/productiv
var ActivitySchema = new Schema({
    userId: {
        type: String,
        required: 'Please enter the userId associated with the activity'
      },
      date: {
        type: String,
        required: 'Please enter the date of the activity'
      },
      activityTitle: {
        type: String,
        required: 'Please enter the title of the activity'
      },
      startTime: {
        type: String,
        required: 'Please enter the start time of the activity'
      },
      endTime: {
        type: String,
        required: 'Please enter the end time of the activity'
      },
      description: {
        type: String,
      }
      
})
module.exports = mongoose.model('Activities', ActivitySchema);

