const port = 8080

require("./config/database")

const express = require("express")
const server = express()
const bodyParser = require("body-parser")

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(require("./config/cors"))
server.use(require("./config/routes"))

server.listen(port, () => console.log(`running on port ${port}`))

module.exports = server
