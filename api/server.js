
var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  Activity = require('./models/productivModel'), //created model loading here
  bodyParser = require('body-parser');

  // Create a database variable outside of the database connection callback to reuse the connection pool in your app.
  // cors
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/productivRoutes'); //importing route
routes(app); //register the route


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Productivdb', function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
 



  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

