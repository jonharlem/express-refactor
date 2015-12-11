var express = require('express');
var app = express();
var song = require('./models/song');
var songRoutes = require('./controllers/songRoutes.js');


app.set('view engine', 'ejs');
app.set('views', 'views/' );
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

songRoutes(app);

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});
