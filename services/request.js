const Request = require('../models/request');

exports.getRequests = () => {
    return Request.find();      
}

exports.addRequest = (duration, imagePath) => {
    const date = new Request({
        date: new Date(),
        duration,
        imagePath
    })

    return date.save();
}