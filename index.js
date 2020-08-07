const express = require('express')
const app = express()
const port = 3000

app.get('/check-status', (req, res) => {
    //@TODO send request to the mskh.am
    const responceTime = 9070 //in ms (1s = 1000ms)
    res.send(`${responceTime}`)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))