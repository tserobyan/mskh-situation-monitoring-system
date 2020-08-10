const express = require('express')
const request = require('request')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/check-status', (req, res) => {
    request.get({
        url : 'https://mskh.am/',
        time : true
      },function(err, response){
        if(!err){
          res.send(`${response.elapsedTime}`)
        } else{
          res.send(null)
        }
      })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))