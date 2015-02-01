var express = require('express');
var router = express.Router();

var React = require('react/addons');
var CMSApp = React.createFactory(require('../components/CMSApp').CMSApp);

router.get('/', function(req, res) {
  var reactHtml = React.renderToString(CMSApp({}));
  
  var config = {
    reactOutput: reactHtml,
    assetDomain: ""
  }
  if(process.env.NODE_ENV == "development"){
    config["assetDomain"] = "http://localhost:3001"
  }
  res.render('index.ejs', config);
})

module.exports = router;
