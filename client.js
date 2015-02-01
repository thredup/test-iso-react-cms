var React = require('react/addons');
var CMSApp = React.createFactory(require('./app/components/CMSApp').CMSApp);

var mountNode = document.getElementById("react-main-mount");

prop_data = {}
React.render(new CMSApp(prop_data), mountNode);
