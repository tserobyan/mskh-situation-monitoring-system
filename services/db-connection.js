const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/myDb', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection
    .on('error', console.log)
    .once('open', () => {
        console.log('Successfully connected to MongoDB');
    });
