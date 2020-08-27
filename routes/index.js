var express = require('express');
var request = require('request');
const { addRequest } = require('../services/request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  getRequests().then((requests) => {
    res.render('index', { title: `Mskh Situation Monitoring System (${requests.length})` });
  })
});

router.get('/check-status', (req, res) => {
  request.get({
    url: 'https://mskh.am/',
    time: true
  }, function (err, response) {
    if (!err) {
      addRequest(response.elapsedTime).then(() => {
        res.render('check-status', { title: 'Timing', value: `${response.elapsedTime}` });
      })
    } else {
      res.render('check-status', { title: 'Error', value: `${err.code}` });
    }
  })
})

module.exports = router;
