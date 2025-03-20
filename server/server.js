const express = require('express')
const app = express()

app.use(express.json(), express.urlencoded({ extended: true }))

//runs the config file that already connects to mongoDB
require('./config/mongoose.config')

require('./routes/character.routes')(app)

app.listen(8000, () => console.log('The Server is running on port 8000'))
