const mongoose = require('mongoose')

const parkSchema = new mongoose.Schema({
    name: String,
    designation: String,
    description: String,
    url: String,
    visited: Boolean,
    notes: String
});

const Parks = mongoose.model('Park', parkSchema)
module.exports = Parks;
