const Request = require('../models/request');

exports.getRequests = () => {
    return Request.find();      
}

exports.addRequest = (duration) => {
    const date = new Request({
        date: new Date(),
        duration: duration
    })

    return date.save();
}