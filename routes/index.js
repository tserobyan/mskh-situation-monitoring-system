var express = require('express');
var puppeteer = require('puppeteer');
const { addRequest, getRequests } = require('../services/request');
var router = express.Router();
var screenshotSettings = {
  size: {
    width: 480,
    height: 600,
    deviceScaleFactor: 0.5,
  },
  save: {
    path: '/assets/screenshots/',
    format: '.png'
  }
};

/* GET home page. */
router.get('/', (req, res, next) => {
  getRequests().then((requests) => {
    res.render('index', { title: `Mskh Situation Monitoring System`, body: `number of records : ${requests.lenght} `, data: JSON.stringify(requests) });
  })
});

router.get('/check-status', (req, res) => {
  checkStatus().then((response) => {
    addRequest(response.duration, response.imagePath);
    res.render('check-status', { title: 'Timing', value: response.duration });
  })
});

async function checkStatus() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://mskh.am');
  await page.setViewport(screenshotSettings.size);
  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType("navigation")))
  )[0];
  console.log(performanceTiming);
  imagePath = screenshotSettings.save.path + new Date().getTime() + screenshotSettings.save.format;
  await page.screenshot({ path: './public' + imagePath, fullPage: true });
  await browser.close();
  return {
    duration: performanceTiming.domContentLoadedEventEnd - performanceTiming.requestStart,
    imagePath: imagePath
  };
}

module.exports = router;
