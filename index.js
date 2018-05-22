const PORT = process.env.PORT || 5000
const express = require('express')
const sockets = require('signalmaster/sockets')

var app = express()
var server = app.listen(PORT)
sockets(server, config) // config is the same that server.js uses