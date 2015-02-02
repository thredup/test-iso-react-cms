var React = require('react/addons');

var CMSApp = React.createFactory(require('./app/components/CMSApp').CMSApp);

var mountNode = document.getElementById("react-main-mount");

_ = require('lodash');

prop_data = {}
var rootComponent = new CMSApp(prop_data)

React.render(rootComponent, mountNode);
