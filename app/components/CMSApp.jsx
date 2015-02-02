var React = require('react/addons');
var Lid = require('./navigation/Lid');
// var ReactButton =  React.createFactory(require('./ReactButton').ReactButton);
var ReactAsync = require('react-async');
// var fakeData = require('../data/fakeData.js').fakeData;
// var columnMeta = require('../data/columnMeta.js').columnMeta;
// var resultsPerPage = 100;

var CMSApp = React.createClass({
  mixins: [ReactAsync.Mixin],
  // componentDidMount: function () {
    
  // },
  getInitialStateAsync: function(cb) {
    cb(null,{});
  },

  render: function () {
    return (
      <div>
        <Lid />
      	<h1>CMSApp 3-2</h1>
      </div>
    )
  }

});

/* Module.exports instead of normal dom mounting */
module.exports.CMSApp = CMSApp;