var express = require('express')
var morgan = require('morgan')
var uuid = require('node-uuid')
path = require('path');
 
morgan.token('id', function getId(req) {
  return req.id
})

var app = express();

require("node-jsx").install({ extension: '.jsx', harmony: true });

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(assignId)
app.use(morgan(':id :status :response-time :method :url'))

app.use(express.static(path.join(__dirname, 'public')));
 
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs'); // set up ejs for templating

require('./app/routes/coreRoutes.js')(app);

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        "route": "Sorry this page does not exist!"
    });
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

function assignId(req, res, next) {
  req.id = uuid.v4()
  next()
}