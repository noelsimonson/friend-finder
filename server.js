var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

