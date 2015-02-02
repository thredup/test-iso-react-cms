var express = require('express');
var router = express.Router();

var React = require('react/addons');
var ReactAsync = require('react-async');
var CMSApp = React.createFactory(require('../../app/components/CMSApp').CMSApp);

router.get('/', function(req, res) {
  //var reactHtml = React.renderToString(CMSApp({}));
  
  ReactAsync.renderToStringAsync(
    CMSApp({}),
    function(err, markup) {
      var config = {
        reactOutput: markup,
        assetDomain: ""
      }
      if(process.env.NODE_ENV == "development"){
        config["assetDomain"] = "http://localhost:3001"
      }
      console.log("pre-render");
      res.render('index.ejs', config);
    }
  );
})

module.exports = router;
