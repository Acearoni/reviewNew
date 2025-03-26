const mongoose = require('mongoose');

//const Name of Schema = mongoose.Schema Fucntion() and pass an object into it.
const CharacterSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide a name."],
        minLength: [2, "Character's name must be at least 2 letters."],
        maxLength: [20, "Charcter name is too long"]
    },
    class: {
        type: String,
        required: [true, "Must provide a class."],
        minLength: [4, "Class name must be at least 4 character's long."]
    },
    level:{
        type: Number,
        required: [true, "Must provide a level."],
        min: [1, "Character level may not be less than 1."]
    },
    hometown: {
        type: String,
        required: [true, "Must provide a hometown."],
        minLength: [2, "Town name must be at least 2 characters long."]
    }
}, { timestamps: true })

//name of Model, Schema its named after
module.exports = mongoose.model('Character', CharacterSchema)