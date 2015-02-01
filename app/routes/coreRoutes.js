var React = require('react/addons');
var CMSApp = React.createFactory(require('../components/CMSApp').CMSApp);

module.exports = function(app) {
  app.get('/', function (req, res) {
    var reactHtml = React.renderToString(CMSApp({}));
    process.env.NODE_ENV = 'development'
    var vars = {
      reactOutput: reactHtml,
      assetDomain: ""
    }
    if(process.env.NODE_ENV == "development"){
      vars["assetDomain"] = "http://localhost:3001"
    }
    res.render('index.ejs', vars);
  })

  // app.get('/', function(req, res){
  //   // React.renderToString takes your component
  //     // and generates the markup
  //   var reactHtml = React.renderToString(ReactApp({}));
  //     // Output html rendered by react
  //   // console.log(myAppHtml);
  //     res.render('index.ejs', {reactOutput: reactHtml});
  // });

};
