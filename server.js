var express = require('express'),
    morgan = require('morgan'),
    uuid = require('node-uuid'),
    reload = require('reload');
path = require('path');
_ = require('lodash');
 
if(!process.env.NODE_ENV)
	process.env.NODE_ENV = 'development';

function isDev(){
	return (process.env.NODE_ENV == "development");
}

morgan.token('id', function getId(req) {
  return req.id
})

var app = express();

if(isDev()){
	var webpack = require('webpack');
	var WebpackDevServer = require('webpack-dev-server');
	var config = require('./webpack.config.dev');
}

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

app.use('/', require('./app/routes/coreRoutes'));
app.use('/content-api', require('./app/routes/contentApiRoutes'));


if(isDev()){
	app.all('/*', function(req, res, next) {
	  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	  next();
	});
}

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        "route": "Sorry this page does not exist!"
    });
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('CMS App listening at http://%s:%s', host, port)

})
reload(server, app);

if(isDev()){
	new WebpackDevServer(webpack(config), {
	  publicPath: config.output.publicPath,
	  hot: true
	}).listen(3001, 'localhost', function (err, result) {
	  if (err) {
	    console.log(err);
	  }
  	  var host = server.address().address
	  var port = server.address().port


	  console.log('Hot Loader listening at http://%s:%s',host, port)
	});
}

function assignId(req, res, next) {
  req.id = uuid.v4()
  next()
}
