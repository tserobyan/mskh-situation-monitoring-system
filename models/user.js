const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Name is required']
    }
});

module.exports = mongoose.model('User', userSchema)
