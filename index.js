const express = require('express')
const app = express()
const request = require('request')
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/check-status', (req, res) => {
    request.get({
        url : 'https://mskh.am/',
        time : true
      },function(err, response){
        res.send(`${response.elapsedTime}`)
      })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))