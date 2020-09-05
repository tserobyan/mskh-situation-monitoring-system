var express = require('express');
var request = require('request');
const { addRequest, getRequests } = require('../services/request');
var router = express.Router();
var data = [
  { date: '2020-08-27 6:00', timing: 2082 },
  { date: '2020-08-27 9:00', timing: 1039 },
  { date: '2020-08-27 12:00', timing: 1049 },
  { date: '2020-08-27 15:00', timing: 2574, error: 'ERRORCODE' },
  { date: '2020-08-27 18:00', timing: 1716 },
  { date: '2020-08-27 21:00', timing: 1130 },
  { date: '2020-08-28 00:00', timing: 1477 },
  { date: '2020-08-28 3:00', timing: 3875, error: 'ERRORCODE' },
  { date: '2020-08-28 6:00', timing: 1375 },
  { date: '2020-08-28 9:00', timing: 1078 },
  { date: '2020-08-28 12:00', timing: 1093 },
  { date: '2020-08-28 15:00', timing: 2355 },
];

/* GET home page. */
router.get('/', (req, res, next) => {
 getRequests().then((requests) => {
    res.render('index', { title: `Mskh Situation Monitoring System`, body:`number of records : ${requests.lenght} ` });
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
