const CharacterController = require('../controllers/character.controller');

module.exports = (app) => {
        //Postman testing routes as well
    app.get('/api/allCharacters', CharacterController.findAllCharacters),
    app.post('/api/createCharacter', CharacterController.createCharacter),
    app.get('/api/findOneCharacter/:id', CharacterController.findOneCharacter),
    app.put('/api/findOneAndUpdate/:id', CharacterController.updateCharacter),
    app.delete('/api/deleteCharacter/:id', CharacterController.deleteCharacter)
}