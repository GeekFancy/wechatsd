var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("Hello World");
});

router.get('/oauth', function (req, res, next) {
  res.send({
    body: req.body,
    url: req.url,
    originalUrl: req.originalUrl
  });
});

module.exports = router;
