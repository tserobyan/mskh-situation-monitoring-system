const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    name: {
        duration: String,
        require: [true, 'duration is required']
    }
});

module.exports = mongoose.model('Request', requestSchema)
