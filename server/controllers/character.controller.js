const Character = require('../models/character.model')

//export object with functions
module.exports = {
    //Key Name
    findAllCharacters: (req, res) => {
        Character.find()
            //then function( needs a function (allCharacters) => {response object.json(allCharacters)}, sends it back to client)
            .then((allCharacters) => {
                res.status(200).json(allCharacters)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    //Create
    createCharacter: (req, res) => {
        Character.create(req.body)
            .then((newCharacter) => {
                res.status(200).json(newCharacter)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    //FindOne
    findOneCharacter: (req, res) => {
        Character.findOne({ _id: req.params.id })
            .then((oneCharacter) => {
                res.status(200).json(oneCharacter)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    updateCharacter: (req, res) => {
        Character.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedCharacter) => {
                res.status(200).json(updatedCharacter)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    deleteCharacter: (req, res) => {
        Character.deleteOne({_id: req.params.id})
            //Result will just be the system saying the count of deleted amount.
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json({err})
            })
    }

}