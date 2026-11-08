var express = require('express');
var router = express.Router();
var controller = require(../controlers/travel');
/* GET travel page. */
router.get('/', controller.travel);

module.exports = router;