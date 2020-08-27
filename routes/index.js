var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mskh Situation Monitoring System' });
});

router.get('/check-status', (req, res) => {
  request.get({
    url: 'https://mskh.am/',
    time: true
  }, function (err, response) {
    if (!err) {
      res.render('check-status', { title: 'Timing', value: `${response.elapsedTime}` });
    } else {
      res.render('check-status', { title: 'Error', value: `${err.code}` });
    }
  })
})

module.exports = router;
