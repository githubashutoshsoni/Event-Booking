var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));

var root='root';
app.get('/booked', function (req, res) {

   res.sendFile(path.join(__dirname, 'web', 'booked.html'));
});

app.get('/logout', function (req, res) {
  delete req.session.auth;
   res.sendFile(path.join(__dirname, 'web', 'samplelogin.html'));
});

app.get('/', function (req, res) {

   res.sendFile(path.join(__dirname, 'web', 'samplelogin.html'));
});

app.get('/book', function (req, res) {

   res.sendFile(path.join(__dirname, 'web', 'index.html'));

});

app.get('/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'web', req.params.fileName));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`listening on ${port}!`);
});
