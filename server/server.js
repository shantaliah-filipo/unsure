const express = require('express')
const path = require('path')

const activityTypesRoutes = require('./routes/activityTypes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/act', activityTypesRoutes)

module.exports = server
