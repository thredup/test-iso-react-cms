var React = require('react')

var ReactAsync = require('react-async')

var request = require('superagent')

var config = require('../../config')

var Lid = React.createClass({
  mixins: [ReactAsync.Mixin],
  // stateFromJSON: function(state) {
  //   return state;
  // },
  getInitialStateAsync: function(cb) {
    request.get(config.LOCAL_API_BASE + '/content-api/lid', function(res){
      return cb(null,res.body);
    }.bind(this));
  },
  render: function() {
    return <div>The is: {this.state}</div>
  }
})

module.exports = Lid