const express = require('express')
const path = require('path')

const activitiesRoutes = require('./routes/activities')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/act', activitiesRoutes)

module.exports = server
