const express = require("express")
const router = express.Router()

router.use("/todo", require("../todo/todo.controller"))

module.exports = router
