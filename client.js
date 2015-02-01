var React = require('react/addons');
var CMSApp = React.createFactory(require('./app/components/CMSApp').CMSApp);

var mountNode = document.getElementById("react-main-mount");

React.render(new CMSApp({'beans' : 'AWESOME'}), mountNode);
