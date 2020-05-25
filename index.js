const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())

//CONNECTING TO DATABASE
require('./utils/database/database')

//IMPORT ROUTERS
const UserRouter = require('./routes/UserRouter')

//USING OUR ROUTES
app.use('/user', UserRouter)



module.exports = app