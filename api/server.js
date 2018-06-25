
var express = require('express'),
app = express(),
port = process.env.PORT || 8080,
mongoose = require('mongoose'),
Activity = require('./models/activityModel'), 
bodyParser = require('body-parser');

var cors = require('cors')
app.use(express.static('www'));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/activityRoutes');
routes(app); 


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test_user:testuser1@ds161710.mlab.com:61710/productiv_activities', function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
 



  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

