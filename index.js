const express = require('express')
const mongoose = require("mongoose");
const User = require('./models/user')
mongoose.connect('mongodb://localhost:27017/myDb', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
    .on('error', console.log)
    .once('open', () => {
        console.log('Successfully connected to MongoDB');
    });

    const tatev = new User({
        name: 'Tatev'
    })

    tatev.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    });

    User
        .find()
        .then((err, users) => {
            if (err) {
                 console.log(err);
            } else {
                console.log(users);
            }
            
        });
      
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))