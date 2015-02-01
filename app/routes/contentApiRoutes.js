var express = require('express');
var router = express.Router();

// mount on server
// var birds = require('./birds');
// ...
// app.use('/birds', birds);

// // middleware specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// })

var lidContent = require('../data/lid.json');

var mapping = {
  "lid" : lidContent
}

function getContentData(contentElement){
  return mapping[contentElement];
};


router.get('/:content_list', function(req, res) {
  var data = {};
  var elements = req.params.content_list.split(",");
  
  _.forEach(elements,function(n){
    data[n] = getContentData(n)
  })
  
  
  res.json(data);
})

module.exports = router;