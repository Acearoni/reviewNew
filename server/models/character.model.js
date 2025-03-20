const mongoose = require('mongoose');

//const Name of Schema = mongoose.Schema Fucntion() and pass an object into it.
const CharacterSchema = mongoose.Schema({
    name: String,
    class: String,
    level: Number,
    hometown: String,
}, { timestamps: true })

//name of Model, Schema its named after
module.exports = mongoose.model('Character', CharacterSchema)