var React = require('react/addons');
// var ReactButton =  React.createFactory(require('./ReactButton').ReactButton);


// var fakeData = require('../data/fakeData.js').fakeData;
// var columnMeta = require('../data/columnMeta.js').columnMeta;
// var resultsPerPage = 100;

var CMSApp = React.createClass({

      // componentDidMount: function () {
        
      // },

      render: function () {
        return (
          <div>
          	<h1>CMSApp</h1>
          </div>
        )
      }

  });

/* Module.exports instead of normal dom mounting */
module.exports.CMSApp = CMSApp;