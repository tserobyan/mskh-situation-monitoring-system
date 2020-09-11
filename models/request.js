const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    date: {
        type: Date,
        require: [true, 'duration is required']
    },
    duration: {
        type: Number,
        require: [true, 'duration is required']
    },
    imagePath: {
        type: String,
        require: false
    },
});

module.exports = mongoose.model('Request', requestSchema)
