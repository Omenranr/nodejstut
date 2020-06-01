const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())

//CONNECTING TO DATABASE
require('./utils/database/database')

//IMPORT ROUTERS
const UserRouter = require('./routes/UserRouter')
const ClassRouter = require('./routes/ClassRouter')
const UserAuthRouter = require('./routes/UserAuthRoute')
const WeatherRouter = require('./weather/WeatherRoute')
//USING OUR ROUTES
app.use('/user', UserRouter)
app.use('/class', ClassRouter)
app.use('/userAuth', UserAuthRouter)
app.use('/weather', WeatherRouter)

module.exports = app