var express = require('express');
var router = express.Router();
var BE = require('../api/BE_api.js');


/* GET home page. */
router.get('/events', function(req, res, next) {
  BE.getBE(res);
});



module.exports = router;
